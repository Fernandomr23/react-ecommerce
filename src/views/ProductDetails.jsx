import { useParams, Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import useCart from "../hooks/useCart"
import useProducts from "../hooks/useProducts"
import Banner from "../components/Banner"

const ProductDetails = () => {
	const { id } = useParams()
	const { handleAddToCart } = useCart()
	const { fetchSingleProduct } = useProducts()
	const navigate = useNavigate()

	const [product, setProduct] = useState(null)

	useEffect(() => {
		fetchSingleProduct(id)
			.then(setProduct)
			.catch((error) => {
				if (error.response?.status === 404) {
					navigate('/not-found', { replace: true })
				}
			})
	}, [id])

	return (
		<div className="eco-product-details-container">
			<Banner />
			<Link to="/" className="eco-product-details-back">Volver a la lista de productos</Link>
			<h1 className="eco-product-details-title">Product Details</h1>
			{product && (
				<div className="eco-product-details-content">
					<img src={product.image} alt={product.title} className="eco-product-details-image" />
					<div className="eco-product-details">
						<p className="eco-product-details-category">{product.category}</p>
						<h2>{product.title}</h2>
						<p className="eco-product-details-description">{product.description}</p>
						{product.rating && (
							<div className="eco-product-rating">
								<p>Rating: {product.rating.rate} / 5</p>
								<p>({product.rating.count} reviews)</p>
							</div>
						)
						}
						<div className="eco-product-details-container">
							<span className="eco-product-details-price">${product.price}</span>
							<button className="eco-product-button" onClick={() => handleAddToCart(product)}>
								Agregar al carrito
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default ProductDetails