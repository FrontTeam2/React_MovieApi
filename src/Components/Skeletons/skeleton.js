import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

const UserSkeleton = () => {
	return (
		<Stack spacing={1}>
			<Skeleton variant="rounded" width={140} height={220} />
			<Skeleton variant="text" sx={{ fontSize: '1rem' }} />
			<Skeleton variant="text" sx={{ fontSize: '1rem' }} />
		</Stack>
	)
}

export default UserSkeleton
