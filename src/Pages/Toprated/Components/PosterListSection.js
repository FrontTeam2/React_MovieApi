import { useInfiniteQuery } from '@tanstack/react-query'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import MovieApi from '../../../Apis/movieApi'
import { INFINITY_QUERY_KEY } from '../../../Consts/query-key'
import {
	FlexAlignCSS,
	FlexBetWeenCSS,
	FlexCenterCSS,
	GridCenter,
	GridColumnFive,
	GridColumnOne,
	GridColumnThree,
} from '../../../Styles/common'
import MainSkeleton from '../../Home/Components/Skeleton'
import { BsFillStarFill } from 'react-icons/bs'

const URL = process.env.REACT_APP_IMAGE_BASEURL
const lengthArray = new Array(20).fill(0)
function PosterListSection({ onMouseOver }) {
	const [isScrolling, setIsScrolling] = useState(false)

	const observerElem = useRef(null)
	const onClickScrolling = () => {
		setIsScrolling(true)
	}
	const fetchMovies = async page => {
		const res = await MovieApi.getCategory({ category: 'top_rated', page })
		return res.data.results
	}

	const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
		useInfiniteQuery(
			[INFINITY_QUERY_KEY.GET_IF_TOP_RATED],
			({ pageParam = 1 }) => fetchMovies(pageParam),
			{
				getNextPageParam: (lastPage, allPages) => {
					const nextPage = allPages.length + 1
					return lastPage.length !== 0 ? nextPage : undefined
				},
			},
		)
	useEffect(() => {
		let fetching = false
		if (isScrolling) {
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
		}
	}, [isScrolling, fetchNextPage, hasNextPage])

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
		if (isScrolling) {
			const observer = new IntersectionObserver(handleObserver, option)
			observer.observe(element)
			return () => observer.unobserve(element)
		}
	}, [fetchNextPage, hasNextPage, handleObserver])

	const navigate = useNavigate()

	return (
		<S.PosterListContainer>
			<S.PosterListWrap>
				{isSuccess === true &&
					data.pages.map(page =>
						page.map(movie => {
							return (
								<li
									key={movie.id}
									onClick={() =>
										navigate(`/detail/${movie.id}`, {
											state: { movie: movie },
										})
									}
									onMouseOver={() => onMouseOver(movie.overview)}
								>
									<S.ImageBox
										image={
											movie.poster_path
												? `${URL}${movie.poster_path}`
												: `${process.env.PUBLIC_URL}/favicon.svg`
										}
									/>
									<div>
										<h4>{movie.title}</h4>
										<p>{movie.release_date}</p>
										<S.ListBox>
											<p>
												<BsFillStarFill
													style={{
														fontSize: '1.4rem',
														color: 'yellow',
														overflow: 'hidden',
														marginRight: '0.3rem',
													}}
												/>
												{movie.vote_average}
											</p>
										</S.ListBox>
									</div>
								</li>
							)
						}),
					)}
			</S.PosterListWrap>
			{!isScrolling && (
				<>
					<button onClick={onClickScrolling}>더 불러오기</button>
				</>
			)}
			<S.LoadingWrap ref={observerElem}>
				{isSuccess && isFetchingNextPage && hasNextPage ? (
					<>
						{lengthArray.map((i, idx) => {
							return <MainSkeleton key={idx} />
						})}
					</>
				) : undefined}
			</S.LoadingWrap>
		</S.PosterListContainer>
	)
}

export default PosterListSection

const PosterListContainer = styled.div`
	width: 100%;
	grid-column-start: 2;
	grid-column-end: 4;
	/* background: blue; */

	@media screen and (max-width: 768px) {
		padding: 0 2rem;
		grid-column-start: 1;
		grid-column-end: 6;
	}

	& > button {
		box-sizing: border-box;
		color: var(--color-white);
		box-shadow: inset 0 0 1.4rem var(--color-red);
		background: var(--color-black);
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
		width: 100%;
		height: 4rem;
		border-radius: 1rem;
		margin-bottom: 4rem;
		${FlexCenterCSS};
		cursor: pointer;
	}
`

const PosterListWrap = styled.ul`
	margin-bottom: 3rem;
	${GridCenter}
	${GridColumnFive}
    row-gap:3rem;
	margin-bottom: 3rem;

	& > li {
		${FlexBetWeenCSS}
		flex-direction: column;
		width: 100%;
		height: 24rem;
		background: #eee;
		border-radius: 1rem;
		overflow: hidden;
		background: var(--color-light-gray);
		box-sizing: border-box;
		cursor: pointer;
		:hover {
			transform: scale(1.1);
		}
	}

	@media screen and (max-width: 1320px) {
		${GridColumnThree}
	}

	@media screen and (max-width: 414px) {
		${GridColumnOne};

		& > li {
			flex-direction: row;
			height: 12rem;
		}

		& > li > div:last-child {
			width: 75% !important;
			height: 100% !important;
			justify-content: center;
		}
	}

	& > li > div:last-child {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
		padding: 1rem;
		height: 30%;
		color: var(--color--black);
		background: var(--color-white);
	}

	& > li > div:last-child > h4 {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`
const ListBox = styled.div`
	position: absolute;
	bottom: 1rem;
	right: 1rem;

	@media screen and (max-width: 768px) {
		position: relative;
		bottom: 0;
		right: 0;
	}

	& > p {
		position: relative;
		${FlexAlignCSS}
		/* bottom: 1rem; */
		

		@media screen and (max-width: 768px) {
			position: absolute;
			bottom: 0;
			right: 1rem;
		}
	}
`

const ImageBox = styled.div`
	width: 100%;
	height: 22rem;
	background: #eee;
	/* border-radius: 2rem; */
	background: ${({ image }) => `url(${image})`} no-repeat center center;
	background-size: cover;

	@media screen and (max-width: 768px) {
		height: 100% !important;
	}

	@media screen and (max-width: 414px) {
		width: 25%;
	}
`
const LoadingWrap = styled.div`
	${GridCenter}
	${GridColumnFive}
`
const S = {
	PosterListContainer,
	PosterListWrap,
	ListBox,
	ImageBox,
	LoadingWrap,
}
