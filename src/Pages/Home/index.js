import styled from 'styled-components'
import { MarginAuto } from '../../Styles/common'
import Section from './Components/Section'
import SearchSection from './Components/Search'
import useGetPopular from '../../Hooks/Queries/Categories/get-popular'
import useGetNowPlaying from '../../Hooks/Queries/Categories/get-nowPlaying'
import useGetTopRated from '../../Hooks/Queries/Categories/get-topRated'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { isOpenSideMenu } from '../../Atoms/sidebar.atom'

function HomePage() {
	const [isMenu, isSetMenu] = useRecoilState(isOpenSideMenu)

	useEffect(() => {
		isSetMenu(false)
	}, [])

	const {
		data: popularList,
		status: popularStatus,
		isLoading: popularIsLoading,
	} = useGetPopular()
	const {
		data: nowList,
		status: nowStatus,
		isLoading: nowIsLoading,
	} = useGetNowPlaying()
	const {
		data: topList,
		status: topStatus,
		isLoading: topIsLoading,
	} = useGetTopRated()
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
