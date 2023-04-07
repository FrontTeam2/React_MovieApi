import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { isOpenSideMenu } from '../../Atoms/sidebar.atom'
import { GridCenter, GridColumnThree, MarginAuto } from '../../Styles/common'
import DescSection from './Components/DescSection'
import PosterListSection from './Components/PosterListSection'
import { useParams } from 'react-router-dom'

function ListPage() {
	const TITLE = {
		now_playing: '현재 상영작',
		popular: '인기 있는',
		top_rated: '평점순',
		upcoming: '개봉 예정작',
	}
	const { category } = useParams()
	const [isMenu, isSetMenu] = useRecoilState(isOpenSideMenu)

	useEffect(() => {
		isSetMenu(false)
	}, [])

	const isMobile = () => {
		const user = navigator.userAgent
		let isCheck = false

		if (user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) {
			isCheck = true
		}

		return isCheck
	}

	const check = isMobile()
	const [isInfo, isSetInfo] = useState(null)
	const onMouseOver = info => {
		const information = info
		if (check === false) {
			isSetInfo(information)
		}
	}

	return (
		<S.ListContainer>
			<S.TitleText>{TITLE[category]}</S.TitleText>
			<S.ListWrap>
				<DescSection information={isInfo} />
				<PosterListSection onMouseOver={onMouseOver} category={category} />
			</S.ListWrap>
		</S.ListContainer>
	)
}

export default ListPage

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
