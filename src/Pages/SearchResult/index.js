import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import {
	FlexAlignCSS,
	GridCenter,
	GridColumnOne,
	GridColumnTwo,
	MarginAuto,
} from '../../Styles/common'
import SearchSection from '../Home/Components/Search'
import useGetSearch from '../../Hooks/Queries/get-search'
import SearchSkelton from './Components/Skeleton'

const URL = process.env.REACT_APP_IMAGE_BASEURL
const lengthArray = new Array(8).fill(0)

function SearchResultPage() {
	const { title } = useParams()
	const { data, status, isLoading } = useGetSearch({ title })

	const navigate = useNavigate()
	const goDetail = movie => {
		navigate(`/detail/${movie.id}`, { state: { movie: movie } })
	}

	return (
		<S.SearchResultContainer>
			<SearchSection />
			<S.SearchResultListWrap>
				<S.SearchResultList>
					{status === 'success' && !isLoading ? (
						<>
							{data.results?.map(movie => {
								return (
									<li key={movie.id} onClick={() => goDetail(movie)}>
										<S.ImageBox image={`${URL}${movie.poster_path}`} />
										<div>
											<div>
												<h4>{movie.title}</h4>
												<p>{movie.release_date}</p>
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

	& > li > div:last-child > p {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
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
	ImageBox,
}
