import { Axios } from './index'

const PATH = 'movie'
const API_KEY = process.env.REACT_APP_API_KEY

const MovieApi = {
	getSearch({ title }) {
		return Axios.get(`/search/${PATH}`, {
			params: { api_key: API_KEY, language: 'ko-KR', query: title },
		})
	},

	getCategory({ category, page }) {
		return Axios.get(`/${PATH}/${category}`, {
			params: { api_key: API_KEY, language: 'ko-KR', page },
		})
	},

	getDetailContent({ movieId }) {
		return Axios.get(`/${PATH}/${movieId}`, {
			params: { api_key: API_KEY, language: 'ko-KR', page },
		})
	},

	getTrailerVideo({ movieId }) {
		return Axios.get(`/${PATH}/${movieId}/videos`, {
			params: { api_key: API_KEY },
		})
	},
}
export default MovieApi
