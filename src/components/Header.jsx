import { useRef } from "react";
import useTheme from "../hooks/useTheme";
import useCart from "../hooks/useCart";

const Header = ({ fetchProducts }) => {
	const { mode, setMode } = useTheme()
	const { cart, setShowCart } = useCart()

	const inputRef = useRef(null)

	const handleFilter = (input) => {
		fetchProducts(input)
	}

	const totalProducts = cart.reduce((total, product) => total + product.quantity, 0)

	return (
		<div className="eco-container">
			<header className="eco-header">
				<nav className="eco-nav">
					<div className="eco-nav-left">
						<span className="eco-text" onClick={() => setShowCart(false)}>EcoShop</span>
						<ul className="eco-menu">
							<li className="eco-menu-item">Categorías</li>
							<li className="eco-menu-item">Ofertas</li>
							<li className="eco-menu-item">Contacto</li>
						</ul>
					</div>
					<div className="eco-nav-right">
						<input type="text" className="eco-nav-search" placeholder="Buscar productos..." ref={inputRef} onChange={() => handleFilter(inputRef.current.value)} />
						<div className="eco-nav-icons">
							<div className="eco-cart" onClick={() => setShowCart(true)}>
								{cart.length > 0 && <span className="eco-cart-icon">{totalProducts}</span>}
								<span className="material-symbols-outlined">
									shopping_cart
								</span>
							</div>
							<div className="eco-mode" onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
								<span className="material-symbols-outlined">
									{mode === 'dark' ? 'dark_mode' : 'light_mode'}
								</span>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	)
}

export default Header