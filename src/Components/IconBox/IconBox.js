import { S } from './IconBox.style'

function IconBox({ children, ...rest }) {
	return <S.Wrapper {...rest}>{children}</S.Wrapper>
}
export default IconBox
