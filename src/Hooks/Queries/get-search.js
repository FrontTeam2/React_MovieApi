import { useQuery } from '@tanstack/react-query'
import MovieApi from '../../Apis/movieApi'
import { QUERY_KEY } from '../../Consts/query-key'
import { queryConfig } from './@config'

const getSearch = async params => {
	const res = await MovieApi.getSearch(params)
	return res.data
}

const useGetSearch = params => {
	const { data, error, status, isLoading } = useQuery(
		[QUERY_KEY.GET_SEARCH],
		getSearch(params),
		{ ...queryConfig },
	)
	return { data, error, status, isLoading }
}
export default useGetSearch
