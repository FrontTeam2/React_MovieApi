import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Styles/global'
import theme from './Styles/theme'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/routing'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}

export default App
