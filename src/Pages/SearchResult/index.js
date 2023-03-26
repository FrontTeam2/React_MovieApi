import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import {
	FlexAlignCSS,
	FlexBetWeenCSS,
	GridCenter,
	GridColumnOne,
	GridColumnTwo,
	MarginAuto,
} from '../../Styles/common'
import SearchSection from '../Home/Components/Search'
import useGetSearch from '../../Hooks/Queries/get-search'

import { useRecoilState } from 'recoil'
import { isOpenSideMenu } from '../../Atoms/sidebar.atom'
import { useEffect } from 'react'
import SearchSkelton from './Components/Skeleton'
import { BsFillStarFill } from 'react-icons/bs'

const URL = process.env.REACT_APP_IMAGE_BASEURL
const lengthArray = new Array(8).fill(0)

function SearchResultPage() {
	const [isMenu, isSetMenu] = useRecoilState(isOpenSideMenu)

	useEffect(() => {
		isSetMenu(false)
	}, [])

	const { title } = useParams()
	const { data, status, isLoading } = useGetSearch({ title })

	const navigate = useNavigate()
	const goDetail = movie => {
		navigate(`/detail/${movie.id}`, { state: { movie: movie } })
	}

	return (
		<S.SearchResultContainer>
			<SearchSection searchTitle={title} />
			<S.SearchResultListWrap>
				<S.SearchResultList>
					{status === 'success' && !isLoading ? (
						<>
							{data.results?.map(movie => {
								return (
									<li key={movie.id} onClick={() => goDetail(movie)}>
										<S.ImageBox
											image={
												movie.poster_path
													? `${URL}${movie.poster_path}`
													: `${process.env.PUBLIC_URL}/favicon.svg`
											}
										/>
										<div>
											<div>
												<div>
													<h4>{movie.title}</h4>
													<p>{movie.release_date}</p>
												</div>
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
														{movie.vote_average.toFixed(1)}
													</p>
												</S.ListBox>
											</div>
											<p>{movie.overview}</p>
										</div>
									</li>
								)
							})}
						</>
					) : (
						<>
							{lengthArray.map((movie, index) => {
								return <SearchSkelton key={index} />
							})}
						</>
					)}
				</S.SearchResultList>
			</S.SearchResultListWrap>
		</S.SearchResultContainer>
	)
}

export default SearchResultPage

const SearchResultContainer = styled.div`
	${MarginAuto}
	margin-bottom:8rem;
`

const SearchResultListWrap = styled.div`
	padding: 0 2rem;
`

const SearchResultList = styled.ul`
	${GridCenter}
	${GridColumnTwo}
    row-gap: 3rem;

	@media screen and (max-width: 768px) {
		${GridColumnOne}
	}

	& > li {
		width: 100%;
		${FlexAlignCSS}
		height: 20rem;
		border-radius: 2rem;
		box-sizing: border-box;
		background: var(--color-white);
		overflow: hidden;

		@media screen and (max-width: 768px) {
			height: 16rem;
		}
	}

	& > li > div {
		height: 100%;
	}

	& > li > div:last-child {
		padding: 0 2rem;
		width: 75%;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
	}

	& > li > div:last-child > div {
		${FlexBetWeenCSS}

		& > div:first-child > h4 {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		@media screen and (max-width: 768px) {
			display: block;

			& > div:first-child {
				margin-bottom: 1rem;
			}
		}
	}

	& > li > div:last-child > p {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
	}
`

const ListBox = styled.div`
	height: 100%;

	@media screen and (max-width: 768px) {
		position: relative;
	}

	& > p {
		position: relative;

		${FlexAlignCSS}
		/* bottom: 1rem; */
		

		@media screen and (max-width: 768px) {
			/* position: absolute; */
			bottom: 0;
			right: 1rem;
		}
	}
`

const ImageBox = styled.div`
	width: 25%;
	background: var(--color-light-gray);
	background-image: ${({ image }) => `url(${image})`};
	background-repeat: no-repeat;
	background-size: cover;
`

const S = {
	SearchResultContainer,
	SearchResultListWrap,
	SearchResultList,
	ListBox,
	ImageBox,
}
