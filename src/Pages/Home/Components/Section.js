import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FlexAlignCSS } from '../../../Styles/common'
import { BsFillStarFill } from 'react-icons/bs'
import LoadingSkeleton from '../../../Components/Skeleton/Skeleton'

const URL = process.env.REACT_APP_IMAGE_BASEURL
const lengthArray = new Array(8).fill(0)

function Section({ title, data, status, isLoading }) {
	const navigate = useNavigate()

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
								<li
									key={movie.id}
									onClick={() =>
										navigate(`/detail/${movie.id}`, { state: { movie: movie } })
									}
								>
									<S.ListBox>
										<p>
											<BsFillStarFill
												style={{
													fontSize: '1.4rem',
													color: 'yellow',
													overflow: 'hidden',
													marginRight: '0.3rem',
												}}
											/>
											{movie.vote_average}
										</p>
										<S.ImageBox image={`${URL}${movie.poster_path}`} />
									</S.ListBox>
									<div>
										<h4>{movie.title}</h4>
										<p>{movie.release_date}</p>
									</div>
								</li>
							))}
						</>
					) : (
						<>
							{lengthArray.map((i, idx) => (
								<S.SkeletonWrap key={idx}>
									<LoadingSkeleton width={'14rem'} height={'22rem'} />
								</S.SkeletonWrap>
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
	margin-bottom: 3rem;
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
		overflow-y: hidden;
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
		padding-top: 1.5rem;
		margin-right: 2rem;
		overflow: visible;
		cursor: pointer;
		:hover {
			transform: scale(1.1);
		}
	}

	& > ul > li > div:last-child {
		padding: 2rem 2rem 1rem;
		width: 14rem;
	}

	& > ul > li > div:last-child > h4 {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
`

const ListBox = styled.div`
	position: relative;

	& > p {
		position: absolute;
		${FlexAlignCSS}
		bottom: 1rem;
		right: 1rem;
	}
`

const ImageBox = styled.div`
	width: 14rem;
	height: 22rem;
	background: #eee;
	border-radius: 1rem; // 전체 UI 맞추기 위해 List Edge 변형
	background-image: ${({ image }) => `url(${image})`};
	background-repeat: no-repeat;
	background-size: cover;
	box-shadow: inset 0 -4rem 4rem rgba(0, 0, 0, 0.5);
`

const SkeletonWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-right: 5px;
`

const S = {
	SectionContainer,
	TextContainer,
	SliderContainer,
	ListBox,
	ImageBox,
	SkeletonWrap,
}
