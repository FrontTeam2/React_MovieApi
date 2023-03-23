import styled from 'styled-components'
import { GridCenter, GridColumnThree, MarginAuto } from '../../Styles/common'
import DescSection from './Components/DescSection'
import PosterListSection from './Components/PosterListSection'

function PopularPage() {
	return (
		<S.ListContainer>
			<S.TitleText>인기있는</S.TitleText>
			<S.ListWrap>
				<DescSection />
				<PosterListSection />
			</S.ListWrap>
		</S.ListContainer>
	)
}

export default PopularPage

const ListContainer = styled.section`
	${MarginAuto}
	color:var(--color-white);
`

const ListWrap = styled.div`
	${GridCenter}
	${GridColumnThree}
`

const TitleText = styled.h2`
	margin-top: 8rem;
	margin-bottom: 4rem;

	@media screen and (max-width: 768px) {
		padding: 0 2rem;
		margin-bottom: 0;
	}
`

const S = { ListContainer, ListWrap, TitleText }
