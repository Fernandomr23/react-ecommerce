import { useRef } from "react";
import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";

const Header = () => {
	const { fetchProducts } = useProducts()
	const { mode, setMode } = useTheme()
	const { cart } = useCart()

	const inputRef = useRef(null)

	const totalProducts = cart.reduce((total, product) => total + product.quantity, 0)

	return (
		<div className="eco-container">
			<header className="eco-header">
				<nav className="eco-nav">
					<div className="eco-nav-left">
						<Link to="/">
							<span className="eco-text">EcoShop</span>
						</Link>
						<ul className="eco-menu">
							<Link to="/login">
								<li className="eco-menu-item">Iniciar sesión</li>
							</Link>
							<Link to="/cart">
								<li className="eco-menu-item">Carrito</li>
							</Link>
						</ul>
					</div>
					<div className="eco-nav-right">
						<input type="text" className="eco-nav-search" placeholder="Buscar productos..." ref={inputRef} onChange={() => fetchProducts(inputRef.current.value)} />
						<div className="eco-nav-icons">
							<Link to="/cart">
								<div className="eco-cart">
									{cart.length > 0 && <span className="eco-cart-icon">{totalProducts}</span>}
									<span className="material-symbols-outlined">
										shopping_cart
									</span>
								</div>
							</Link>
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