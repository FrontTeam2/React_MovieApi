import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Components/Layouts'
import HomePage from '../Pages/Home'

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
				element: '',
			},
			{
				path: '/top_rated',
				element: '',
			},
			{
				path: '/now_playing',
				element: '',
			},
			{
				path: '/up_coming',
				element: '',
			},
			{
				path: '/search',
				element: '',
			},
			{
				path: '/detail/:id',
				element: '',
			},
		],
	},
])

export default router
