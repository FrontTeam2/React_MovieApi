import styled from 'styled-components'
import { FlexAlignCSS } from '../../../Styles/common'
import MainSkeleton from './Skeleton'

const URL = process.env.REACT_APP_IMAGE_BASEURL
const lengthArray = new Array(8).fill(0)

function Section({ title, data, status, isLoading }) {
	return (
		<S.SectionContainer>
			<S.TextContainer>
				<h3>{title}</h3>
				<p></p>
			</S.TextContainer>
			<S.SliderContainer>
				<ul>
					{status === 'success' && !isLoading ? (
						<>
							{data.results.map(movie => (
								<li key={movie.id}>
									<S.ImageBox image={`${URL}${movie.poster_path}`} />
									<div>
										<h4>{movie.title}</h4>
										<p>{movie.release_date}</p>
									</div>
								</li>
							))}
						</>
					) : (
						<>
							{lengthArray.map(i => (
								<MainSkeleton />
							))}
						</>
					)}
				</ul>
			</S.SliderContainer>
		</S.SectionContainer>
	)
}
export default Section

const SectionContainer = styled.section`
	height: 44rem;
	/* background: red; */
	padding: 0 2rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 30px;
`
const TextContainer = styled.div`
	color: var(--color-white);
	margin-bottom: 2rem;
`

const SliderContainer = styled.div`
	& > ul {
		position: relative;
		/* ${FlexAlignCSS} */
		display: flex;
		align-items: flex-start;
		color: var(--color-white);
		overflow-x: auto;
		padding-bottom: 1rem;
		::-webkit-scrollbar-thumb {
			background: var(--color-light-gray);
			border-radius: 0.5rem;
		}
		::-webkit-scrollbar {
			width: auto;
			height: 1rem;
		}
	}

	& > ul > li {
		flex-shrink: 0;
		margin-right: 2rem;
		overflow: visible;
	}

	/* & > ul > li > div:first-child {
		width: 14rem;
		height: 22rem;
		background: #eee;
		border-radius: 2rem;
	} */

	& > ul > li > div:last-child {
		padding: 2rem 2rem 1rem;
		width: 14rem;
	}
`

const ImageBox = styled.div`
	width: 14rem;
	height: 22rem;
	background: #eee;
	border-radius: 2rem;
	background-image: ${({ image }) => `url(${image})`};
	background-repeat: no-repeat;
	background-size: cover;
`

const S = { SectionContainer, TextContainer, SliderContainer, ImageBox }
