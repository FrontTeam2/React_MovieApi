import styled from 'styled-components'

function DescSection({ information }) {
	return (
		<S.DescContainer>
			{information ? <p>{information}</p> : <p>설명을 확인하세요!</p>}
		</S.DescContainer>
	)
}

export default DescSection

const DescContainer = styled.div`
	/* position: fixed;
	left: 0; */
	width: 100%;
	grid-column-start: 1;
	grid-column-end: 2;
	/* background: red; */

	@media screen and (max-width: 768px) {
		/* height: 18rem; */
		padding: 0 2rem;
		margin: 4rem 0;
		grid-column-start: 1;
		grid-column-end: 6;
	}

	& > p {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
	}
`
const S = {
	DescContainer,
}
