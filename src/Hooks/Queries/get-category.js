import { useQuery } from '@tanstack/react-query'
import MovieApi from '../../Apis/movieApi'
import { QUERY_KEY } from '../../Consts/query-key'
import { queryConfig } from './@config'

const getCategory = async params => {
	const res = await MovieApi.getCategory(params)
	return res.data
}

const useGetCategory = params => {
	const { data, error, status, isLoading } = useQuery(
		[QUERY_KEY.GET_CATEGORY],
		() => getCategory(params),
		{ ...queryConfig },
	)
	return { data, error, status, isLoading }
}
export default useGetCategory
