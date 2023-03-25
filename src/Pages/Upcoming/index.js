import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { isOpenSideMenu } from '../../Atoms/sidebar.atom'
import { GridCenter, GridColumnThree, MarginAuto } from '../../Styles/common'
import DescSection from './Components/DescSection'
import PosterListSection from './Components/PosterListSection'

function UpComingPage() {
	const [isMenu, isSetMenu] = useRecoilState(isOpenSideMenu)

	useEffect(() => {
		isSetMenu(false)
	}, [])
	const [isInfo, isSetInfo] = useState(null)
	const onMouseOver = info => {
		const information = info
		isSetInfo(information)
	}
	return (
		<S.ListContainer>
			<S.TitleText>개봉 예정작</S.TitleText>
			<S.ListWrap>
				<DescSection information={isInfo} />
				<PosterListSection onMouseOver={onMouseOver} />
			</S.ListWrap>
		</S.ListContainer>
	)
}

export default UpComingPage

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
