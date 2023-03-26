import styled from 'styled-components'
import { CiSearch } from 'react-icons/ci'
import { FlexAlignCSS } from '../../../Styles/common'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function SearchSection({ searchTitle }) {
	const navigate = useNavigate()
	const [title, setTitle] = useState('')
	const onChangeSearch = e => {
		setTitle(e.target.value)
	}
	const handleKeyPress = e => {
		if (e.key === 'Enter') {
			onSubmitSearch()
		}
	}
	const onSubmitSearch = () => {
		if (title == '') {
			alert('검색어를 입력해주세요')
			return
		}
		navigate(`/search/${title}`)
	}

	return (
		<S.SearchContainer>
			<S.TitleContainer>
				<h2>Welcome.</h2>
				<p>Millions of movies, TV shows and people to discover. Explore now.</p>
			</S.TitleContainer>
			<S.InputContainer>
				<CiSearch
					style={{
						position: 'absolute',
						top: '50%',
						transform: 'translateY(-50%)',
						left: '1rem',
						fontSize: '2.8rem',
						color: 'black',
					}}
				/>
				<input
					type="text"
					placeholder={'영화, TV 프로그램, 인물 검색...'}
					onChange={onChangeSearch}
					onKeyDown={handleKeyPress}
					defaultValue={searchTitle}
				></input>
			</S.InputContainer>
		</S.SearchContainer>
	)
}

export default SearchSection

const SearchContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 2rem;
	height: 36rem;
	color: var(--color-white);
`

const TitleContainer = styled.div`
	margin-bottom: 4rem;
`

const InputContainer = styled.div`
	position: relative;
	${FlexAlignCSS}
	& > input {
		width: 100%;
		height: 4rem;
		box-sizing: border-box;
		border-radius: 2rem;
		text-indent: 4.4rem;
		color: var(--color--black);
	}
`

const S = {
	SearchContainer,
	TitleContainer,
	InputContainer,
}
