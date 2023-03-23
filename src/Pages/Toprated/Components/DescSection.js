import styled from 'styled-components'

function DescSection() {
	return (
		<S.DescContainer>
			<p>
				At the turn of the 19th century, Pugilism was the sport of kings and a
				gifted young boxer fought his way to becoming champion of England.
			</p>
		</S.DescContainer>
	)
}

export default DescSection

const DescContainer = styled.div`
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
