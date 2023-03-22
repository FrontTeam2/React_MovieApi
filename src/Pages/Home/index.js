import styled from 'styled-components'
import { MarginAuto } from '../../Styles/common'
import NowPlayingSection from './Components/NowPlaying'
import PopularSection from './Components/Popular'
import SearchSection from './Components/Search'
import TopRatedSection from './Components/TopRated'

function HomePage() {
	return (
		<S.HomeContainer>
			<SearchSection />
			<PopularSection />
			<TopRatedSection />
			<NowPlayingSection />
		</S.HomeContainer>
	)
}

export default HomePage

const HomeContainer = styled.section`
	${MarginAuto}
`

const S = {
	HomeContainer,
}
