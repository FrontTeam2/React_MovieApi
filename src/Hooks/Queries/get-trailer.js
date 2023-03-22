import { useQuery } from '@tanstack/react-query'
import MovieApi from '../../Apis/movieApi'
import { QUERY_KEY } from '../../Consts/query-key'
import { queryConfig } from './@config'

const getTrailer = async params => {
	const res = await MovieApi.getTrailerVideo(params)
	return res.data
}

const useGetTrailer = params => {
	const { data, error, status, isLoading } = useQuery(
		[QUERY_KEY.GET_TRAILER],
		getTrailer(params),
		{ ...queryConfig },
	)
	return { data, error, status, isLoading }
}
export default useGetTrailer
