import styled from 'styled-components'
import { MarginAuto } from '../../../Styles/common'

function Footer() {
	return (
		<S.FooterWrapper>
			<S.FooterContainer>
				<S.Logo>HEY, C&N</S.Logo>
				<S.Description>
					<h2>Welcome.</h2>
					<p>
						Millions of movies, TV shows and people to discover. Explore now.
					</p>
				</S.Description>
			</S.FooterContainer>
		</S.FooterWrapper>
	)
}

export default Footer

const FooterWrapper = styled.footer`
	margin-top: 4rem;
	box-sizing: border-box;
	box-shadow: 0 -0.1rem 1rem;
	padding: 0 2rem;
`

const FooterContainer = styled.div`
	${MarginAuto}
	display:flex;
	flex-direction: column;
	justify-content: center;
	height: 28rem;
	/* background: red; */
`

const Logo = styled.h3`
	color: var(--color-red);
`

const Description = styled.div`
	color: var(--color-white);
`

const S = {
	FooterWrapper,
	FooterContainer,
	Logo,
	Description,
}
