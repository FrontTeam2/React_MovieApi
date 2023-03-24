import { useQuery } from '@tanstack/react-query'
import MovieApi from '../../../Apis/movieApi'
import { QUERY_KEY } from '../../../Consts/query-key'
import { queryConfig } from '../@config'

const getCategory = async () => {
	const res = await MovieApi.getCategory({ category: 'now_playing' })
	return res.data
}

const useGetNowPlaying = () => {
	const { data, error, status, isLoading } = useQuery(
		[QUERY_KEY.GET_NOW_PLAYING],
		() => getCategory(),
		{ ...queryConfig },
	)
	return { data, error, status, isLoading }
}
export default useGetNowPlaying
