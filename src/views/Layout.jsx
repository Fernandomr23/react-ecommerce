import useTheme from '../hooks/useTheme'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ fetchProducts, children }) => {
	const { mode } = useTheme()

	return (
		<div className={`eco-app ${mode}`}>
			<Header fetchProducts={fetchProducts} />
			<main className="eco-main">
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default Layout