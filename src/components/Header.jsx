import { useRef } from "react";

const Header = ({ fetchProducts }) => {
	const inputRef = useRef(null);

	const handleFilter = (input) => {
		fetchProducts(input);
	}

	return (
		<div className="eco-container">
			<header className="eco-header">
				<nav className="eco-nav">
					<div className="eco-nav-left">
						<span className="eco-text">EcoShop</span>
						<ul className="eco-menu">
							<li className="eco-menu-item">Categorías</li>
							<li className="eco-menu-item">Ofertas</li>
							<li className="eco-menu-item">Contacto</li>
						</ul>
					</div>
					<div className="eco-nav-right">
						<input type="text" className="eco-nav-search" placeholder="Buscar productos..." ref={inputRef} onChange={() => handleFilter(inputRef.current.value)} />
						<div className="eco-nav-icons">
							<span className="eco-icon">🛒</span>
							<span className="eco-icon">❤️</span>
							<span className="eco-icon">👤</span>
						</div>
					</div>
				</nav>
			</header>
		</div>
	)
}

export default Header