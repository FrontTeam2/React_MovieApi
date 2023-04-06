import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Components/Layouts'
import DetailPage from '../Pages/Detail'
import HomePage from '../Pages/Home'
import SearchResultPage from '../Pages/SearchResult'
import InfinitePages from '../Pages/InfinitePages'

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
				path: '/popular/:category/:korTitle',
				element: <InfinitePages />,
			},
			{
				path: '/now_playing/:category/:korTitle',
				element: <InfinitePages />,
			},
			{
				path: '/top_rated/:category/:korTitle',
				element: <InfinitePages />,
			},
			{
				path: '/upcoming/:category/:korTitle',
				element: <InfinitePages />,
			},
			{
				path: '/search/:title',
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
