import useCart from "../hooks/useCart";

const Cart = () => {
	const { cart, setCart, handleConfirmPurchase } = useCart()

	const totalPayout = cart.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);

	return (
		<section className="eco-cart-container">
			<h2 className="eco-cart-title">Carrito de Compras</h2>
			{
				cart.length === 0 ? (
					<p className="eco-cart-empty">Tu carrito está vacío</p>
				) : (
					<>
						<div className="eco-cart-items">
							{cart.map((product) => (
								<div key={product.id} className="eco-cart-item">
									<img src={product.image} alt={product.name} className="eco-cart-image" />
									<div className="eco-cart-details">
										<span className="eco-cart-quantity">{product.quantity}</span>
										<h3 className="eco-cart-name">{product.title}</h3>
										<p className="eco-cart-price">${product.price * product.quantity}</p>
										{product.quantity > 1 && <p className="eco-cart-unit-price">Precio por unidad: ${product.price}</p>}
									</div>
								</div>
							))}
						</div>
						<div className="eco-cart-footer">
							<p className="eco-cart-total">Total: <span>${totalPayout}</span></p>
							<div className="eco-cart-buttons">
								<button className="eco-cart-checkout-button" onClick={handleConfirmPurchase}>Proceder al pago</button>
								<button className="eco-cart-clear-button" onClick={() => setCart([])}>Limpiar Carrito</button>
							</div>
						</div>
					</>
				)
			}
		</section>
	)
}

export default Cart