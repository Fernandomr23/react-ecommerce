import { useState } from "react";
import ProductForm from "./ProductForm";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Banner = () => {
	const { username, role, logout } = useAuth()
	const navigate = useNavigate()

	const [showModal, setShowModal] = useState(false)

	return (
		<div className="eco-banner">
			{username ? (
				<div className="eco-banner-logged">
					<span className="eco-banner-text">
						¡Bienvenido de nuevo, {username}!
					</span>
					<p className="eco-banner-text">Disfruta de tus productos favoritos con descuentos exclusivos.</p>
					<div className="eco-banner-buttons">
						<button className="eco-login-button" onClick={() => logout(navigate)}>
							Cerrar sesión
						</button>
						{role === 'admin' &&
							<button className="eco-admin-button" onClick={() => setShowModal(true)}>
								Añadir producto
							</button>
						}
					</div>
				</div>
			) : (
				<span className="eco-banner-text">
					¡20% de descuento para nuevos clientes!
				</span>
			)}
			{showModal && <ProductForm setShow={setShowModal} />}
		</div>
	)
}

export default Banner