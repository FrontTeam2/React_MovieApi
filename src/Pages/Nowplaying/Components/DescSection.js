import styled from 'styled-components'

function DescSection() {
	return (
		<S.DescContainer>
			<p>
				아홉 개의 목숨 중 단 하나의 목숨만 남은 장화신은 고양이. 마지막 남은
				목숨을 지키기 위해 히어로의 삶 대신 반려묘의 삶을 선택한 그에게 찾아온
				마지막 기회, 바로 소원을 들어주는 소원별이 있는 곳을 알려주는 지도!
				잃어버린 목숨을 되찾고 다시 히어로가 되기를 꿈꾸는 장화신은 고양이는
				뜻밖에 동료가 된 앙숙 파트너 '키티 말랑손', 그저 친구들과 함께라면 모든
				게 행복한 강아지 '페로'와 함께 소원별을 찾기 위해 길을 떠난다. 그리고
				소원별을 노리는 또 다른 빌런들과 마주치게 되는데…
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
