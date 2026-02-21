import { useState } from "react";
import { Link } from "react-router-dom";
import ProductForm from "./ProductForm";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";

const ProductList = () => {
	const { products, deleteProduct } = useProducts()
	const { handleAddToCart } = useCart()
	const { username, role } = useAuth()

	const [showModal, setShowModal] = useState(false)
	const [selectedProduct, setSelectedProduct] = useState(null)

	const handleModal = (product) => {
		setSelectedProduct(product)
		setShowModal(true)
	}

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
							<button className="eco-product-button" onClick={(e) => handleCartClick(product, e)}>
								Agregar al carrito
							</button>
						)
					}
					{
						role === 'admin' && (
							<div className="admin-buttons">
								<button className="eco-admin-button" onClick={() => handleModal(product)}>
									<span className="material-symbols-outlined">
										edit
									</span>
								</button>
								<button className="eco-admin-button" onClick={() => deleteProduct(product.id)}>
									<span className="material-symbols-outlined">
										delete
									</span>
								</button>
							</div>
						)
					}
				</div>
			))}
			{showModal && <ProductForm product={selectedProduct} setShow={setShowModal}/>}
		</section>
	)
}

export default ProductList