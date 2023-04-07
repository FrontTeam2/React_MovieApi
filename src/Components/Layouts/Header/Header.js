import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
	FlexAlignCSS,
	FlexBetWeenCSS,
	MarginAuto,
} from '../../../Styles/common'
import SideBar from './SideBar/SideBar'

function Header() {
	const navigate = useNavigate()
	return (
		<S.HeaderWrapper>
			<S.HeaderContainer>
				<S.HeaderGNB>
					<S.Logo onClick={() => navigate('/')}>HEY, C&N</S.Logo>
					<S.Category>
						<ul>
							<li onClick={() => navigate('/list/popular')}>인기순</li>
							<li onClick={() => navigate('/list/now_playing')}>현재 상영작</li>
							<li onClick={() => navigate('/list/upcoming')}>개봉 예정작</li>
							<li onClick={() => navigate('/list/top_rated')}>평점순</li>
						</ul>
					</S.Category>
				</S.HeaderGNB>
				<SideBar />
			</S.HeaderContainer>
		</S.HeaderWrapper>
	)
}

export default Header
const HeaderWrapper = styled.section`
	box-sizing: border-box;
	box-shadow: 0 0.1rem 1rem;

	@media screen and (max-width: 768px) {
		padding: 0 2rem;
	}
`

const HeaderContainer = styled.header`
	${FlexBetWeenCSS}
	${MarginAuto}
	height: 6rem;
	/* background: red; */
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
`
const HeaderGNB = styled.div`
	${FlexAlignCSS}
`

const Logo = styled.h1`
	margin-right: 4rem;
	color: var(--color-red);
	cursor: pointer;
`

const Category = styled.nav`
	& > ul {
		${FlexAlignCSS}
		color: var(--color-white);
	}

	& > ul > li {
		margin-right: 4rem;
		cursor: pointer;
	}

	& > ul > li:last-child {
		margin-right: 0;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`

const S = {
	HeaderWrapper,
	HeaderContainer,
	HeaderGNB,
	Logo,
	Category,
}
