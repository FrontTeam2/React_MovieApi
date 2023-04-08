import styled from 'styled-components'
import { FlexAlignCSS } from '../../Styles/common'

const Wrapper = styled.p`
	position: relative;
	${FlexAlignCSS}

	@media screen and (max-width: 768px) {
		position: absolute;
		bottom: 0;
		right: 1rem;
	}
`

export const S = { Wrapper }
