import Banner from '../components/Banner'
import ProductList from '../components/ProductList'

const Home = ({ products }) => {
	return (
		<>
			<Banner />
			<ProductList products={products} />
		</>
	)
}

export default Home