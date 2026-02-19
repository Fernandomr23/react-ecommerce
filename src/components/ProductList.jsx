import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
	const { handleAddToCart } = useCart()
	const { username } = useAuth()

	const handleCartClick = (product, e) => {
		e.stopPropagation()
		handleAddToCart(product)
	}

	return (
		<section className="eco-product-list">
			{products.map(product => (
				<div key={product.id} className="eco-product-card-content">
					<Link to={`/product/${product.id}`}>
						<img src={product.image} alt={product.name} className="eco-product-image" />
						<h2 className="eco-product-name">{product.title}</h2>
						<p className="eco-product-desc">{product.description}</p>
						<p className="eco-product-price">${product.price}</p>
					</Link>
					{
						username && (
							<button className="eco-product-button" onClick={() => handleAddToCart(product)}>
								Agregar al carrito
							</button>
						)
					}
				</div>
			))}
		</section>
	)
}

export default ProductList