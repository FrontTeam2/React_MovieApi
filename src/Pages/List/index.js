import { useSetRecoilState } from 'recoil'
import { isOpenSideMenu } from '../../Atoms/sidebar.atom'
import { useEffect, useState } from 'react'
import Information from './Components/Information'
import isMobile from '../../Utils/isMobile'
import PosterListSection from './Components/Section'
import { CATEGORY_TO_TITLE } from '../../Consts/category-title'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { GridCenter, GridColumnThree, MarginAuto } from '../../Styles/common'

const check = isMobile()

function List() {
	const { category } = useParams()
	const setIsMenu = useSetRecoilState(isOpenSideMenu)
	const [info, setInfo] = useState('')

	useEffect(() => setIsMenu(false), [])

	const onViewMovieInfo = movieInfo => {
		if (check === false) {
			// 모바일이 아니라면
			setInfo(movieInfo)
		}
	}

	return (
		<S.ListContainer>
			<S.TitleText>{CATEGORY_TO_TITLE[category]}</S.TitleText>
			<S.ListWrap>
				<Information info={info} />
				<PosterListSection category={category} onMouseOver={onViewMovieInfo} />
			</S.ListWrap>
		</S.ListContainer>
	)
}
export default List

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
