import styled from 'styled-components'
import { FlexAlignCSS, MarginAuto } from '../../../Styles/common'

function VideoSection() {
	return (
		<S.VideoContainer>
			<S.TitleText>
				<h3>영상</h3>
			</S.TitleText>
			<S.Hr />
			<S.VideoSliderWrap>
				<S.VideoSlider>
					<li>
						<S.Video></S.Video>
					</li>
					<li>
						<S.Video></S.Video>
					</li>
					<li>
						<S.Video></S.Video>
					</li>
				</S.VideoSlider>
			</S.VideoSliderWrap>
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
const VideoSliderWrap = styled.div`
	height: 100%;
`

const VideoSlider = styled.ul`
	${FlexAlignCSS}
	height:100%;
	padding-right: 2rem;
	overflow-x: auto;
	overflow-y: hidden;

	& > li {
		flex-shrink: 0;
		margin-right: 2rem;
		width: 95%;
		height: 36rem;
		background: var(--color-light-gray);
		border-radius: 2rem;
	}

	& > li:last-child {
		margin-right: 0;
	}
`

const Video = styled.video`
	width: 100%;
	height: 100%;
`

const S = {
	VideoContainer,
	TitleText,
	Hr,
	VideoSliderWrap,
	VideoSlider,
	Video,
}
