import useCart from '../hooks/useCart'
import useAuth from '../hooks/useAuth'
import ProducList from './ProductList'
import Banner from './Banner'
import Cart from './Cart'
import Login from './Login'

const MainLayout = ({ products }) => {
	const { showCart } = useCart()
	const { username } = useAuth()

	return (
		<main className="eco-main">
			<Banner />
			{!username && <Login  />}
			{
				showCart ? (
					<Cart />
				) : (
					<ProducList products={products} />
				)
			}
		</main>
	)
}

export default MainLayout