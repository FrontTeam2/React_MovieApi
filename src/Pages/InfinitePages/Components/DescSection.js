import styled from 'styled-components'

function DescSection({ information }) {
	return (
		<S.DescContainer>
			{information ? (
				<p>{information}</p>
			) : (
				<p>* PC : 포스터에 마우스를 올릴시, 줄거리 확인 가능</p>
			)}
		</S.DescContainer>
	)
}

export default DescSection

const DescContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	max-width: 120rem;
	grid-column-start: 1;
	grid-column-end: 2;
	/* background: red; */

	@media screen and (max-width: 768px) {
		/* height: 18rem; */
		position: relative;
		padding: 0 2rem;
		margin: 4rem 0;
		grid-column-start: 1;
		grid-column-end: 6;
	}

	& > p {
		position: fixed;
		max-width: 38rem;
		font-size: ${({ theme }) => theme.FONT_SIZE.small};

		@media screen and (max-width: 768px) {
			position: relative;
			width: 100%;
			max-width: 100%;
		}
	}
`
const S = {
	DescContainer,
}
