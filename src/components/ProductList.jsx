import useCart from "../hooks/useCart";

const ProductList = ({ products }) => {
	const { handleAddToCart } = useCart()

	return (
		<section className="eco-product-list">
			{products.map(product => (
				<div key={product.id} className="eco-product-card">
					<img src={product.image} alt={product.name} className="eco-product-image" />
					<h2 className="eco-product-name">{product.title}</h2>
					<p className="eco-product-desc">{product.description}</p>
					<div className="eco-product-container">
						<p className="eco-product-price">${product.price}</p>
						<p className="eco-product-button" onClick={() => handleAddToCart(product)}>
							Agregar al carrito
						</p>
					</div>
				</div>
			))}
		</section>
	)
}

export default ProductList