import styled from 'styled-components'
import { FlexAlignCSS } from '../../../Styles/common'

function PopularSection() {
	return (
		<S.SectionContainer>
			<S.TextContainer>
				<h3>인기있는</h3>
				<p></p>
			</S.TextContainer>
			<S.SliderContainer>
				<ul>
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
				</ul>
			</S.SliderContainer>
		</S.SectionContainer>
	)
}
export default PopularSection

const SectionContainer = styled.section`
	height: 44rem;
	/* background: red; */
	padding: 0 2rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
`
const TextContainer = styled.div`
	color: var(--color-white);
	margin-bottom: 2rem;
`

const SliderContainer = styled.div`
	& > ul {
		position: relative;
		${FlexAlignCSS}
		color:var(--color-white);
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

	& > ul > li > div:first-child {
		width: 14rem;
		height: 22rem;
		background: #eee;
		border-radius: 1rem;
	}

	& > ul > li > div:last-child {
		padding: 2rem 2rem 1rem;
	}
`

const S = { SectionContainer, TextContainer, SliderContainer }
