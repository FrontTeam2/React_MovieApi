<p align="middle"><img src="https://user-images.githubusercontent.com/112946860/227723084-e3f970c6-fe4d-455b-98b0-c017d0643937.svg" width='200' /></p>
<h1 align="middle">HEY, C&N</h1>

### 🚩 프로젝트 설명
- 본 프로젝트는 [영화 트레일러 오픈 API](https://developers.themoviedb.org/3/movies/get-movie-details)를 활용한 영화 목록 조회 웹 사이트입니다.

### 🚀 배포 주소
- [HEY, C&N](https://main--fancy-arithmetic-d1aed8.netlify.app/)

### 🖥️ 실제 구현 화면
- 메인 페이지 <br /><img src="https://user-images.githubusercontent.com/112946860/227723988-11485e76-ac03-4796-8fac-7dbe3f957d9f.png" width="50%"/>
- 상세 페이지<br /><img src="https://user-images.githubusercontent.com/112946860/227724168-4a33aeb1-2cae-4910-b6d7-afe92eeb2f43.png" width="50%"/>
- 리스트 페이지(인기있는, 현재 상영중인, 개봉 예정작, 평점순)<br /><img src="https://user-images.githubusercontent.com/112946860/227724427-e1629ab5-e89b-4fde-9270-9e90fc63e527.png" width="50%" />
- 검색 결과 페이지<br /><img src="https://user-images.githubusercontent.com/112946860/227724694-4429b616-9c6e-4009-a055-b31d07ff77ef.png" width="50%"/>

### 🔥 프로그래밍 및 기능 요구사항
- react-query를 사용하여 데이터를 캐싱할 것
- 로딩 중에는 skeleton UI를 나타낼 것
- 목록을 불러올 때는 react-query의 useInfiniteQuery를 사용하여 무한 스크롤링으로 불러올 것
- 페이지
  - 리스트 페이지
    - 각 영화의 평점 및 짧은 미리보기(소개)가 나타나야 함
    - 미리보기는 길이가 길다면 특정 글자수를 넘어가면 ...으로 표시할 수 있도록 UI를 고려할 것
  - 상세 페이지
    - 비디오가 있는 경우, 페이지 진입 시 자동으로 비디오 플레이
    - 제목, 포스터, 별점, 제작 연도, 장르 데이터 활용해서 UI 표기
    - 그 외의 데이터 추가 활용 여부는 자유
  - search
    - 제목, 포스터, 미리보기(소개), 별점
    - 포스터 없는 경우, 대체 이미지 사

### 🌳 프로젝트 폴더 구조
```
src
│  App.js
│  index.js
│
├─Apis
│      index.js
│      movieApi.js
│
├─Atoms
│      sidebar.atom.js
│
├─Components
│  └─Layouts
│      │  index.js
│      │
│      ├─Footer
│      │  │  Footer.js
│      │  │
│      │  └─TopButton
│      │          TopButton.js
│      │
│      └─Header
│          │  Header.js
│          │
│          └─SideBar
│                  SideBar.js
│
├─Consts
│      query-key.js
│
├─Hooks
│  └─Queries
│          @config.js
│          get-category.js
│          get-detail.js
│          get-search.js
│          get-trailer.js
│
├─Pages
│  ├─Detail
│  │  │  index.js
│  │  │
│  │  └─Components
│  │          StarEval.js
│  │          Video.js
│  │
│  ├─Home
│  │  │  index.js
│  │  │
│  │  └─Components
│  │          Search.js
│  │          Section.js
│  │          Skeleton.js
│  │
│  ├─Nowplaying
│  │  │  index.js
│  │  │
│  │  └─Components
│  │          DescSection.js
│  │          PosterListSection.js
│  │
│  ├─Popular
│  │  │  index.js
│  │  │
│  │  └─Components
│  │          DescSection.js
│  │          PosterListSection.js
│  │
│  ├─SearchResult
│  │  │  index.js
│  │  │
│  │  └─Components
│  │          Skeleton.js
│  │
│  ├─Toprated
│  │  │  index.js
│  │  │
│  │  └─Components
│  │          DescSection.js
│  │          PosterListSection.js
│  │
│  └─Upcoming
│      │  index.js
│      │
│      └─Components
│              DescSection.js
│              PosterListSection.js
│
├─Routes
│      routing.js
│
└─Styles
        common.js
        global.js
        theme.js
```

### 👨‍👩‍👧‍👦 팀원 소개 및 역할
빈태찬 | 김도은 | 윤동영 | 이하늘 | 이주홍
|:--:|:--:|:--:|:--:|:--:|
[beenbin](https://github.com/showme0241) | [Doeunnkimm](https://github.com/Doeunnkimm) | [JacobYoon97](https://github.com/JacobYoon97) | [twosky0202](https://github.com/twosky0202) | [LEE JUHONG](https://github.com/dlwnghd)
PM, <br/>전체 UXUI, <br />상세 페이지 조회 기능 | API 모듈화, <br>react-query로 쿼리 훅 함수 정의, <br>메인 페이지 조회 기능 | 무한 스크롤링 기능, <br> 상세 리스트 페이지 조회 기능, <br>메인 및 상세 페이지 UI 참여 | 검색 기능,<br> 검색 결과 조회 기능 | - |

### ⚒️ 사용 기술 스텍
기술 스택 | 종류
|:--|:--|
**언어** |  <img  width="60" src="https://user-images.githubusercontent.com/112946860/225957694-7e3b3669-9216-4271-a7c8-555c8976368b.png" /><br />Javascript
**프론트엔드** | <img width="60" src="https://user-images.githubusercontent.com/112946860/225957071-10a74540-d7b5-457c-821e-91547e62a429.png" /><br />React

사용 라이브러리 | 사용한 부분
|:--|:--|
**styled-components** | 스타일 컴포넌트 구성 시 사용
**react-router-dom** | URL에 따라 화면을 렌더링 시 사용
**axios** | api를 통한 비동기 통신 시 사용
**recoil** | 전역 상태 관리 시 사용
**react-query** | 데이터 관리 라이브러리

### 🤝 협업 
Notion | https://legend-asiago-8af.notion.site/e7b571d087054fb6a3d0ef9208674887 |
|--|--|
