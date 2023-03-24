import styled from 'styled-components'
import {
	FlexAlignCSS,
	GridCenter,
	GridColumnOne,
	GridColumnTwo,
	MarginAuto,
} from '../../Styles/common'
import SearchSection from '../Home/Components/Search'

function SearchResultPage() {
	return (
		<S.SearchResultContainer>
			<SearchSection />
			<S.SearchResultListWrap>
				<S.SearchResultList>
					<li>
						<div></div>
						<div>
							<div>
								<h4>KBS 드라마 스페셜</h4>
								<p>5월 15, 2010</p>
							</div>
							<p>
								다양하고 완성도 있는 이야기asdasdasdasda로 제작기asdasdasdasda로
								제작기asdasdasdasda로 제작기asdasdasdasda로 제작된 단편
							</p>
						</div>
					</li>
					<li>
						<div></div>
						<div>
							<div>
								<h4>KBS 드라마 스페셜</h4>
								<p>5월 15, 2010</p>
							</div>
							<p>
								다양하고 완성도 있는 이야기로 제작된 단편드라마를 담은 프로그램
							</p>
						</div>
					</li>
					<li>
						<div></div>
						<div>
							<div>
								<h4>KBS 드라마 스페셜</h4>
								<p>5월 15, 2010</p>
							</div>
							<p>
								다양하고 완성도 있는 이야기로 제작된 단편드라마를 담은 프로그램
							</p>
						</div>
					</li>
					<li>
						<div></div>
						<div>
							<div>
								<h4>KBS 드라마 스페셜</h4>
								<p>5월 15, 2010</p>
							</div>
							<p>
								다양하고 완성도 있는 이야기로 제작된 단편드라마를 담은 프로그램
							</p>
						</div>
					</li>
					<li>
						<div></div>
						<div>
							<div>
								<h4>KBS 드라마 스페셜</h4>
								<p>5월 15, 2010</p>
							</div>
							<p>
								다양하고 완성도 있는 이야기로 제작된 단편드라마를 담은 프로그램
							</p>
						</div>
					</li>
					<li>
						<div></div>
						<div>
							<div>
								<h4>KBS 드라마 스페셜</h4>
								<p>5월 15, 2010</p>
							</div>
							<p>
								다양하고 완성도 있는 이야기로 제작된 단편드라마를 담은 프로그램
							</p>
						</div>
					</li>
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

	& > li > div:first-child {
		width: 25%;
		background: var(--color-light-gray);
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

const S = {
	SearchResultContainer,
	SearchResultListWrap,
	SearchResultList,
}
