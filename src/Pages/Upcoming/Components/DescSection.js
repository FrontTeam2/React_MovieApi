import styled from 'styled-components'

function DescSection() {
	return (
		<S.DescContainer>
			<p>
				국왕이자 블랙 팬서인 티찰라의 죽음 이후 수많은 강대국으로부터 위협을
				받게 된 와칸다. 라몬다, 슈리 그리고 나키아, 오코예, 음바쿠는 각자
				사명감을 갖고 와칸다를 지키기 위해 외로운 싸움을 이어간다. 한편,
				비브라늄의 패권을 둘러싼 미스터리한 음모와 함께 깊은 해저에서 모습을
				드러낸 최강의 적 네이머와 탈로칸의 전사들은 와칸다를 향해 무차별 공격을
				퍼붓기 시작하는데…
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
