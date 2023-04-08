import Skeleton from '@mui/material/Skeleton'

function LoadingSkeleton({ width, height, ...rest }) {
	return (
		<Skeleton
			sx={{ bgcolor: 'grey.400' }}
			animation="wave"
			variant="rounded"
			width={width}
			height={height}
			{...rest}
		/>
	)
}
export default LoadingSkeleton
