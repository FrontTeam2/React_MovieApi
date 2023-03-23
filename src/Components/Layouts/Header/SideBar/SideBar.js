import styled from 'styled-components'
import { CiMenuBurger } from 'react-icons/ci'
import { useEffect, useRef, useState } from 'react'
import { FlexAlignCSS } from '../../../../Styles/common'
import { useNavigate } from 'react-router-dom'

function SideBar() {
	const [isMenu, isSetMenu] = useState(false)

	const slideRef = useRef()
	const onSideBar = () => {
		isSetMenu(prev => !prev)
	}
	useEffect(() => {
		if (isMenu === false) {
			slideRef.current.style.transform = 'translateX(100%)'
		}
		if (isMenu === true) {
			slideRef.current.style.transform = 'translateX(0%)'
		}
	}, [isMenu])

	const navigate = useNavigate()
	return (
		<S.HamburgerMenu>
			<CiMenuBurger
				style={{
					position: 'relative',
					zIndex: '100',
					fontSize: '3rem',
					color: 'white',
				}}
				onClick={onSideBar}
			/>

			<S.SideBarContainer ref={slideRef}>
				<ul>
					<li onClick={() => navigate('/popular')}>인기순</li>
					<li onClick={() => navigate('/now_playing')}>현재 상영작</li>
					<li onClick={() => navigate('/up_coming')}>개봉 예정작</li>
					<li onClick={() => navigate('/top_rated')}>평점순</li>
				</ul>
			</S.SideBarContainer>
		</S.HamburgerMenu>
	)
}

export default SideBar

const HamburgerMenu = styled.div`
	${FlexAlignCSS}
	cursor: pointer;

	@media screen and (min-width: 769px) {
		display: none;
	}
`

const SideBarContainer = styled.nav`
	position: fixed;
	transition: 0.5s ease-in-out;
	transform: translateX(100%);
	font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	background: var(--color--black);
	color: var(--color-white);
	width: 50%;
	z-index: 99;
	height: 100%;
	top: 0;
	right: 0;

	& > ul {
		padding: 12rem 4rem;
	}

	& > ul > li {
		margin-bottom: 4rem;
		cursor: pointer;
	}
`

const S = {
	HamburgerMenu,
	SideBarContainer,
}
