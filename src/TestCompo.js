import { useInfiniteQuery } from '@tanstack/react-query'

import axios from 'axios'
import { useCallback, useEffect, useRef } from 'react'

function TestPage() {
	const observerElem = useRef(null)

	const baseUrl = 'https://api.themoviedb.org/3'
	const key = 'd009e94bf38b570c435159c6cea58d4e'
	const fetchMovies = async page => {
		try {
			const res = await axios.get(
				`${baseUrl}/movie/popular?api_key=${key}&page=${page}`,
			)

			return res.data.results
		} catch (err) {
			return console.log('오류발생')
		}
	}

	// const { data } = useQuery(['movies'], fetchMovies)

	// const movies = data.data.results

	// console.log(movies)
	const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
		useInfiniteQuery(
			// ReactQuery에서는 useQuery를 사용하기위핸 const {data} = useQuery(['키'],데이터 담을 함수)
			['movies'],
			({ pageParam = 2 }) => fetchMovies(pageParam), // 우리는 2페이지부터 불러올 거기 때문에 무한 스크롤링 시작을 2페이지로 잡음
			{
				getNextPageParam: (lastPage, allPages) => {
					const nextPage = allPages.length + 1
					return nextPage
				},
			},
		)
	useEffect(() => {
		let fetching = false
		const handleScroll = async e => {
			const { scrollHeight, scrollTop, clientHeight } =
				e.target.scrollingElement
			if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
				fetching = true
				if (hasNextPage) await fetchNextPage()
				fetching = false
			}
		}
		document.addEventListener('scroll', handleScroll)
		return () => {
			document.removeEventListener('scroll', handleScroll)
		}
	}, [fetchNextPage, hasNextPage])

	const handleObserver = useCallback(
		entries => {
			const [target] = entries
			if (target.isIntersecting) {
				fetchNextPage()
			}
		},
		[fetchNextPage, hasNextPage],
	)

	useEffect(() => {
		const element = observerElem.current
		const option = { threshold: 0 }

		const observer = new IntersectionObserver(handleObserver, option)
		observer.observe(element)
		return () => observer.unobserve(element)
	}, [fetchNextPage, hasNextPage, handleObserver])
	return (
		<>
			{isSuccess &&
				data.pages.map(page =>
					page.map(movies => {
						return <div key={movies.id}>{movies.title}</div>
					}),
				)}
			<div ref={observerElem}>
				{isFetchingNextPage && hasNextPage ? 'Loading...' : 'No search left'}
			</div>
		</>
	)
}

export default TestPage
