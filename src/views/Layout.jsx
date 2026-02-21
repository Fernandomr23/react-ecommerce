import { Outlet } from 'react-router-dom'
import useTheme from '../hooks/useTheme'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = () => {
	const { mode } = useTheme()

	return (
		<div className={`eco-app ${mode}`}>
			<Header />
			<main className="eco-main">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout