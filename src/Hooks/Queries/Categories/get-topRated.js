import { useQuery } from '@tanstack/react-query'
import MovieApi from '../../../Apis/movieApi'
import { QUERY_KEY } from '../../../Consts/query-key'
import { queryConfig } from '../@config'

const getCategory = async () => {
	const res = await MovieApi.getCategory({ category: 'top_rated' })
	return res.data
}

const useGetTopRated = () => {
	const { data, error, status, isLoading } = useQuery(
		[QUERY_KEY.GET_TOP_RATED],
		() => getCategory(),
		{ ...queryConfig },
	)
	return { data, error, status, isLoading }
}
export default useGetTopRated
