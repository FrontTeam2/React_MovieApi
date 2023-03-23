import Skeleton from '@mui/material/Skeleton'
import styled from 'styled-components'

function MainSkeleton() {
	return (
		<S.Wrapper>
			<Skeleton
				sx={{ bgcolor: 'grey.400' }}
				animation="wave"
				variant="rounded"
				width={'14rem'}
				height={'22rem'}
			/>
			<Skeleton
				style={{ marginTop: '14px' }}
				sx={{ bgcolor: 'grey.400' }}
				animation="wave"
				variant="rounded"
				width={100}
				height={50}
			/>
		</S.Wrapper>
	)
}
export default MainSkeleton

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-right: 5px;
`

const S = {
	Wrapper,
}
