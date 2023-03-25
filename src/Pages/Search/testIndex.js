import { useParams } from 'react-router'
import useGetSearch from '../../Hooks/Queries/get-search'

function SearchPage() {
	const { title } = useParams()
	console.log(title)
	const {
		data: searchList,
		status: searchStatus,
		isLoading: searchIsLoading,
	} = useGetSearch({ title })
	console.log(searchList)
	console.log(searchStatus)
	return (
		<>
			{searchStatus === 'success' &&
				searchList.results.map(movie => {
                    return(
					    <div key={movie.id}>{movie.title}</div>
                    )
				})}
		</>
	)
}
export default SearchPage
