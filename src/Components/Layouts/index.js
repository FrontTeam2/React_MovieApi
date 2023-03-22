import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Layout() {
	return (
		<S.Wrapper>
			<Header />
			<Outlet />
			<Footer />
		</S.Wrapper>
	)
}

export default Layout

const Wrapper = styled.div`
	background: var(--color--black);
	overflow: hidden;
`
const S = {
	Wrapper,
}
