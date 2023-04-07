import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Components/Layouts'
import DetailPage from '../Pages/Detail'
import HomePage from '../Pages/Home'
import SearchResultPage from '../Pages/SearchResult'
import ListPage from '../Pages/List'

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
				path: '/list/:category',
				element: <ListPage />,
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
