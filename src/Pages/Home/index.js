import styled from 'styled-components'
import useGetCategory from '../../Hooks/Queries/get-category'
import { MarginAuto } from '../../Styles/common'
import Section from './Components/Section'
import SearchSection from './Components/Search'

function HomePage() {
	const {
		data: popularList,
		status: popularStatus,
		isLoading: popularIsLoading,
	} = useGetCategory({ category: 'popular' })
	const {
		data: nowList,
		status: nowStatus,
		isLoading: nowIsLoading,
	} = useGetCategory({ category: 'now_playing' })
	const {
		data: topList,
		status: topStatus,
		isLoading: topIsLoading,
	} = useGetCategory({ category: 'top_rated' })
	return (
		<S.HomeContainer>
			<SearchSection />
			<Section
				title={'인기있는'}
				data={popularList}
				status={popularStatus}
				isLoading={popularIsLoading}
			/>
			<Section
				title={'높은 평점순'}
				data={nowList}
				status={nowStatus}
				isLoading={nowIsLoading}
			/>
			<Section
				title={'현재 상영작'}
				data={topList}
				status={topStatus}
				isLoading={topIsLoading}
			/>
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
