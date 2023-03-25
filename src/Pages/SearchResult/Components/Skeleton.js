import { Skeleton } from '@mui/material'

function SearchSkelton() {
	return (
		<Skeleton
			sx={{ bgcolor: 'grey.400' }}
			variant="rounded"
			width={`100%`}
			height={`20rem`}
			style={{ borderRadius: `2rem` }}
		/>
	)
}
export default SearchSkelton
