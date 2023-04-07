import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import {
	FlexBetWeenCSS,
	GridCenter,
	GridColumn,
	MarginAuto,
} from '../../Styles/common'
import StarEval from './Components/StarEval'
import VideoSection from './Components/Video'

const URL = process.env.REACT_APP_IMAGE_BASEURL

function DetailPage() {
	const location = useLocation()
	const {
		id,
		title,
		overview,
		poster_path,
		backdrop_path,
		release_date,
		vote_average,
		genre_ids,
	} = location.state.movie

	return (
		<>
			<S.BannerSection backDropIMG={`${URL}${backdrop_path}`}>
				<S.Wrapper>
					<S.PosterSection posterIMG={`${URL}${poster_path}`}></S.PosterSection>
					<S.DescSection>
						<div>
							<h2>{title}</h2>
							<span>
								{release_date} <StarEval vote_average={vote_average} />
							</span>
						</div>
						<div>
							<h3>개요</h3>
							<p>{overview}</p>
						</div>
					</S.DescSection>
				</S.Wrapper>
			</S.BannerSection>
			<VideoSection movieId={id} />
		</>
	)
}

export default DetailPage

const BannerSection = styled.section`
	position: relative;
	padding: 0 2rem;
	height: 60vh;
	background: ${({ backDropIMG }) => `url(${backDropIMG})`} no-repeat center
		center;
	background-size: cover;
	color: var(--color-white);

	&::after {
		content: '';
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		z-index: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: 768px) {
		height: 100%;
	}
`

const Wrapper = styled.div`
	position: relative;
	z-index: 1;
	height: 100%;
	padding: 4rem 0;
	${MarginAuto}
	${GridCenter}
    ${GridColumn(5)}
    row-gap: 3rem;
`

const PosterSection = styled.div`
	width: 28rem;
	border-radius: 1rem;
	/* background: blue; */
	height: 100%;
	background: ${({ posterIMG }) => `url(${posterIMG})`} no-repeat center center;
	background-size: cover;

	@media screen and (max-width: 768px) {
		width: 100%;
		grid-column-start: 1;
		grid-column-end: 10;
		height: 48rem;
		background-size: contain;
	}
`

const DescSection = styled.div`
	width: 100%;
	padding: 2rem 0;
	grid-column-start: 2;
	grid-column-end: 10;

	/* background: yellow; */
	/* height: 24rem; */

	@media screen and (max-width: 768px) {
		grid-column-start: 1;
	}

	& > div:first-child {
		margin-bottom: 4rem;
	}

	& > div:first-child > span {
		${FlexBetWeenCSS}
	}

	& > div:last-child > h3 {
		margin-bottom: 1rem;
	}
`

const S = {
	BannerSection,
	Wrapper,
	PosterSection,
	DescSection,
}
