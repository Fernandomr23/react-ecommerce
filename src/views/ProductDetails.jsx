import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import useCart from "../hooks/useCart"
import Banner from "../components/Banner"

const ProductDetails = () => {
	const { id } = useParams()
	const { handleAddToCart } = useCart()
	const [product, setProduct] = useState(null)

	useEffect(() => {
		const fetchProductDetails = async () => {
			const newProduct = await fetch(`https://fakestoreapi.com/products/${id}`)
				.then(response => response.json());
			setProduct(newProduct)
			console.log(newProduct)
		}

		fetchProductDetails()
	}, [])

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
						<div className="eco-product-rating">
							<p>Rating: {product.rating.rate} / 5</p>
							<p>({product.rating.count} reviews)</p>
						</div>
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