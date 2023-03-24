import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Components/Layouts'
import DetailPage from '../Pages/Detail'
import HomePage from '../Pages/Home'
import NowPlayingPage from '../Pages/Nowplaying'
import PopularPage from '../Pages/Popular'
import SearchResultPage from '../Pages/SearchResult'
import TopRatedPage from '../Pages/Toprated'
import UpComingPage from '../Pages/Upcoming'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/popular',
				element: <PopularPage />,
			},
			{
				path: '/now_playing',
				element: <NowPlayingPage />,
			},
			{
				path: '/top_rated',
				element: <TopRatedPage />,
			},
			{
				path: '/up_coming',
				element: <UpComingPage />,
			},
			{
				path: '/search',
				element: <SearchResultPage />,
			},
			{
				path: '/detail/:id',
				element: <DetailPage />,
			},
		],
	},
])

export default router
