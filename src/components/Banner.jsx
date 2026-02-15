import useAuth from "../hooks/useAuth";

const Banner = () => {
	const { username, logout } = useAuth()

	return (
		<div className="eco-banner">
			{username ? (
				<div className="eco-banner-logged">
					<span className="eco-banner-text">
						¡Bienvenido de nuevo, {username}!
					</span>
					<p className="eco-banner-text">Disfruta de tus productos favoritos con descuentos exclusivos.</p>
					<button className="eco-login-button" onClick={logout}>
						Cerrar sesión
					</button>
				</div>
			) : (
				<span className="eco-banner-text">
					¡20% de descuento para nuevos clientes!
				</span>
			)}
		</div>
	)
}

export default Banner