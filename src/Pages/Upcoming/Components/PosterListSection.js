import { useInfiniteQuery } from '@tanstack/react-query'
import MovieApi from '../../../Apis/movieApi'
import { INFINITY_QUERY_KEY } from '../../../Consts/query-key'
import InfiniteList from '../../InfiniteList/infiniteList'

function PosterListSection({ onMouseOver }) {
	const fetchMovies = async page => {
		const res = await MovieApi.getCategory({ category: 'upcoming', page })
		return res.data.results
	}

	const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
		useInfiniteQuery(
			[INFINITY_QUERY_KEY.GET_IF_UPCOMING],
			({ pageParam = 1 }) => fetchMovies(pageParam),
			{
				getNextPageParam: (lastPage, allPages) => {
					const nextPage = allPages.length + 1
					return lastPage.length !== 0 ? nextPage : undefined
				},
			},
		)

	return (
		<InfiniteList
			data={data}
			isSuccess={isSuccess}
			hasNextPage={hasNextPage}
			fetchNextPage={fetchNextPage}
			isFetchingNextPage={isFetchingNextPage}
			onMouseOver={onMouseOver}
		/>
	)
}

export default PosterListSection
