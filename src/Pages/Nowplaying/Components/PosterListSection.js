import styled from 'styled-components'
import {
	FlexBetWeenCSS,
	FlexCenterCSS,
	GridCenter,
	GridColumnFive,
	GridColumnOne,
	GridColumnThree,
} from '../../../Styles/common'

function PosterListSection() {
	return (
		<S.PosterListContainer>
			<S.PosterListWrap>
				<li>
					<div></div>
					<div>
						<h4>보스턴 교살자</h4>
						<p>2020.03.20</p>
					</div>
				</li>
				<li>
					<div></div>
					<div>
						<h4>보스턴 교살자</h4>
						<p>2020.03.20</p>
					</div>
				</li>
				<li>
					<div></div>
					<div>
						<h4>보스턴 교살자</h4>
						<p>2020.03.20</p>
					</div>
				</li>
				<li>
					<div></div>
					<div>
						<h4>보스턴 교살자</h4>
						<p>2020.03.20</p>
					</div>
				</li>
				<li>
					<div></div>
					<div>
						<h4>보스턴 교살자</h4>
						<p>2020.03.20</p>
					</div>
				</li>
				<li>
					<div></div>
					<div>
						<h4>보스턴 교살자</h4>
						<p>2020.03.20</p>
					</div>
				</li>
				<li>
					<div></div>
					<div>
						<h4>보스턴 교살자</h4>
						<p>2020.03.20</p>
					</div>
				</li>
				<li>
					<div></div>
					<div>
						<h4>보스턴 교살자</h4>
						<p>2020.03.20</p>
					</div>
				</li>
				<li>
					<div></div>
					<div>
						<h4>보스턴 교살자</h4>
						<p>2020.03.20</p>
					</div>
				</li>
				<li>
					<div></div>
					<div>
						<h4>보스턴 교살자</h4>
						<p>2020.03.20</p>
					</div>
				</li>
				<li>
					<div></div>
					<div>
						<h4>보스턴 교살자</h4>
						<p>2020.03.20</p>
					</div>
				</li>
				<li>
					<div></div>
					<div>
						<h4>보스턴 교살자</h4>
						<p>2020.03.20</p>
					</div>
				</li>
			</S.PosterListWrap>
			<button>더 불러오기</button>
		</S.PosterListContainer>
	)
}

export default PosterListSection

const PosterListContainer = styled.div`
	width: 100%;
	grid-column-start: 2;
	grid-column-end: 4;
	/* background: blue; */

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

		& > li > div:first-child {
			width: 50%;
		}

		& > li > div:last-child {
			height: 100% !important;
			justify-content: center;
		}
	}

	& > li > div:last-child {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 1rem;
		height: 30%;
		color: var(--color--black);
		background: var(--color-white);
	}
`

const S = {
	PosterListContainer,
	PosterListWrap,
}
