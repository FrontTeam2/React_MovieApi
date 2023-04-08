import { useEffect, useState } from 'react'
import { useGetCategoryInfinite } from '../../../Hooks/Queries/get-category'
import { useNavigate } from 'react-router-dom'
import {
	FlexCenterCSS,
	FlexBetWeenCSS,
	GridCenter,
	GridColumnFive,
	GridColumnOne,
	GridColumnThree,
} from '../../../Styles/common'
import LoadingSkeleton from '../../../Components/Skeleton/Skeleton'
import styled from 'styled-components'
import { BsFillStarFill } from 'react-icons/bs'
import IconBox from '../../../Components/IconBox/IconBox'

const URL = process.env.REACT_APP_IMAGE_BASEURL
const lengthArray = new Array(5).fill(0)

function PosterListSection({ category, onMouseOver }) {
	const navigate = useNavigate()

	const [isScroll, setIsScroll] = useState(false)
	const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
		useGetCategoryInfinite({ category })

	useEffect(() => {
		let fetching = false
		if (isScroll) {
			const handleScroll = async e => {
				const { scrollHeight, scrollTop, clientHeight } =
					e.target.scrollingElement
				if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
					fetching = true
					if (hasNextPage) await fetchNextPage()
					fetching = false
				}
			}
			document.addEventListener('scroll', handleScroll)
			return () => {
				document.removeEventListener('scroll', handleScroll)
			}
		}
	}, [isScroll, fetchNextPage, hasNextPage])

	return (
		<S.PosterListContainer>
			<S.PosterListWrap>
				{isSuccess &&
					data?.pages.map(page =>
						page.results.map(movie => (
							<li
								key={movie.id}
								onClick={() =>
									navigate(`/detail/${movie.id}`, {
										state: { movie: movie },
									})
								}
								onMouseOver={() => onMouseOver(movie.overview)}
							>
								<S.ImageBox
									image={
										movie.poster_path
											? `${URL}${movie.poster_path}`
											: `${process.env.PUBLIC_URL}/favicon.svg`
									}
								/>
								<div>
									<h4>{movie.title}</h4>
									<p>{movie.release_date}</p>
									<S.ListBox>
										<IconBox>
											<BsFillStarFill
												style={{
													fontSize: '1.4rem',
													color: 'yellow',
													overflow: 'hidden',
													marginRight: '0.3rem',
												}}
											/>
											{movie.vote_average}
										</IconBox>
									</S.ListBox>
								</div>
							</li>
						)),
					)}
			</S.PosterListWrap>
			{!isScroll && (
				<>
					<button onClick={() => setIsScroll(true)}>더 불러오기</button>
				</>
			)}
			<S.LoadingWrap>
				{isFetchingNextPage && hasNextPage ? (
					<>
						{lengthArray.map((i, idx) => (
							<LoadingSkeleton key={idx} width={'100%'} height={'20rem'} />
						))}
					</>
				) : (
					<></>
				)}
			</S.LoadingWrap>
		</S.PosterListContainer>
	)
}
export default PosterListSection

const PosterListContainer = styled.div`
	width: 100%;
	grid-column-start: 2;
	grid-column-end: 4;

	@media screen and (max-width: 768px) {
		padding: 0 2rem;
		grid-column-start: 1;
		grid-column-end: 6;
	}

	& > button {
		box-sizing: border-box;
		color: var(--color-white);
		box-shadow: inset 0 0 1.4rem var(--color-red);
		background: var(--color-black);
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
		width: 100%;
		height: 4rem;
		border-radius: 1rem;
		margin-bottom: 4rem;
		${FlexCenterCSS};
		cursor: pointer;
	}
`

const PosterListWrap = styled.ul`
	margin-bottom: 3rem;
	${GridCenter}
	${GridColumnFive}
    row-gap:3rem;
	margin-bottom: 3rem;

	& > li {
		${FlexBetWeenCSS}
		flex-direction: column;
		width: 100%;
		height: 24rem;
		background: #eee;
		border-radius: 1rem;
		overflow: hidden;
		background: var(--color-light-gray);
		box-sizing: border-box;
		cursor: pointer;
		:hover {
			transform: scale(1.1);
		}
	}

	@media screen and (max-width: 1320px) {
		${GridColumnThree}
	}

	@media screen and (max-width: 414px) {
		${GridColumnOne};

		& > li {
			flex-direction: row;
			height: 12rem;
		}

		& > li > div:last-child {
			width: 75% !important;
			height: 100% !important;
			justify-content: center;
		}
	}

	& > li > div:last-child {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
		padding: 1rem;
		height: 30%;
		color: var(--color--black);
		background: var(--color-white);
	}

	& > li > div:last-child > h4 {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`
const ListBox = styled.div`
	position: absolute;
	bottom: 1rem;
	right: 1rem;

	@media screen and (max-width: 768px) {
		position: relative;
		bottom: 0;
		right: 0;
	}
`

const ImageBox = styled.div`
	width: 100%;
	height: 22rem;
	background: #eee;
	background: ${({ image }) => `url(${image})`} no-repeat center center;
	background-size: cover;

	@media screen and (max-width: 768px) {
		height: 100% !important;
	}

	@media screen and (max-width: 414px) {
		width: 25%;
	}
`
const LoadingWrap = styled.div`
	${GridCenter}
	${GridColumnFive}
`
const S = {
	PosterListContainer,
	PosterListWrap,
	ListBox,
	ImageBox,
	LoadingWrap,
}
