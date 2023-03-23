import styled from 'styled-components'

function DescSection() {
	return (
		<S.DescContainer>
			<p>
				1985년 마약 밀매업자의 비행기 추락 사고로 인해 비행기에 실려있던
				코카인이 조지아주 채터후치 국유림에 떨어지고 코카인을 손에 넣기 위한
				마약상들과 관광객들이 코카인을 먹은 흑곰에 의해 처참하게 죽임을 당한다는
				내용의 실화를 바탕으로 한 영화
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
