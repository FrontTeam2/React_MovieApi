import styled from 'styled-components'
import { MarginAuto } from '../../../Styles/common'

function VideoSection() {
	return <VideoContainer></VideoContainer>
}

export default VideoSection

const VideoContainer = styled.div`
	${MarginAuto}
	height: 50vh;
	background: red;
`

const S = {
	VideoContainer,
}
