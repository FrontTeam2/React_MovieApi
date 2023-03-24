import styled from 'styled-components'
import { MarginAuto } from '../../../Styles/common'

function VideoSection() {
	return (
		<S.VideoContainer>
			<S.TitleText>
				<h3>영상</h3>
			</S.TitleText>
			<S.Hr />
			<S.Video></S.Video>
		</S.VideoContainer>
	)
}

export default VideoSection

const VideoContainer = styled.div`
	${MarginAuto}
	padding:4rem 2rem;
	height: 100%;
	/* background: red; */
`

const TitleText = styled.div`
	color: var(--color-white);
`

const Hr = styled.hr`
	width: 100%;
	margin: 1rem 0 4rem;
`

const Video = styled.video`
	width: 100%;
	height: 36rem;
	background: var(--color-light-gray);
	border-radius: 2rem;
`

const S = {
	VideoContainer,
	TitleText,
	Hr,
	Video,
}
