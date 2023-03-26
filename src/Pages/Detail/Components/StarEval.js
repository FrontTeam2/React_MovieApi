import styled from 'styled-components'
import { FlexAlignCSS, FlexCenterCSS } from '../../../Styles/common'

function StarEval({ vote_average }) {
	const maxScore = 10

	return (
		<S.StarContainer>
			<h4>평점</h4>
			<S.CurrentScore
				style={{
					width: `${vote_average}rem`,
					background: 'yellow',
					marginRight: `${maxScore - vote_average}rem`,
				}}
			>
				{vote_average}점/{maxScore}점
			</S.CurrentScore>
			<S.TotalScore
				style={{ width: `${maxScore}rem`, background: '#fff' }}
			></S.TotalScore>
		</S.StarContainer>
	)
}

export default StarEval

const StarContainer = styled.div`
	${FlexAlignCSS}
	position: relative;
	width: 14rem;

	& > div {
		position: absolute;
		${FlexCenterCSS}
		right: 0;
		height: 2rem;
		border-radius: 1rem;
		box-sizing: border-box;
		/* left: 0; */
	}

	/* & > h4 {
		width: 4rem;
	} */
`

const TotalScore = styled.div`
	z-index: 1;
`

const CurrentScore = styled.div`
	z-index: 2;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: var(--color--black);
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
`

const S = {
	StarContainer,
	TotalScore,
	CurrentScore,
}
