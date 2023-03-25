import styled from 'styled-components'
import useGetTrailer from '../../../Hooks/Queries/get-trailer'
import { FlexAlignCSS, MarginAuto } from '../../../Styles/common'

const VIDEO_URL = 'https://www.youtube.com/embed'

function VideoSection({ movieId }) {
	const {
		data: trailerList,
		error,
		status,
		isLoading,
	} = useGetTrailer({ movieId })

	return (
		<S.VideoContainer>
			<S.TitleText>
				<h3>영상</h3>
			</S.TitleText>
			<S.Hr />
			{status && !isLoading ? (
				<S.VideoSliderWrap>
					<S.VideoSlider>
						{trailerList.results.map(video => (
							<li key={video.id}>
								<S.Video
									title={video.name}
									src={`${VIDEO_URL}/${video.key}?autoplay=1&mute=1`}
								></S.Video>
							</li>
						))}
					</S.VideoSlider>
				</S.VideoSliderWrap>
			) : (
				<div>로딩중</div>
			)}
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
	padding-bottom: 2rem;
	overflow-x: auto;
	overflow-y: hidden;
	::-webkit-scrollbar-thumb {
		background: var(--color-light-gray);
		border-radius: 0.5rem;
	}
	::-webkit-scrollbar {
		width: auto;
		height: 1rem;
	}

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

const Video = styled.iframe`
	width: 100%;
	height: 100%;
	border-radius: 2rem;
	border: none;
`

const S = {
	VideoContainer,
	TitleText,
	Hr,
	VideoSliderWrap,
	VideoSlider,
	Video,
}
