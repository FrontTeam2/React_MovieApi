import styled from 'styled-components'

function Information({ info }) {
	return (
		<S.InfoContainer>
			<p>{info ? info : '* PC : 포스터에 마우스를 올릴시, 줄거리 확인 가능'}</p>
		</S.InfoContainer>
	)
}
export default Information

const InfoContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	max-width: 120rem;
	grid-column-start: 1;
	grid-column-end: 2;

	@media screen and (max-width: 768px) {
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
	InfoContainer,
}
