import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className="eco-not-found">
			<div className="eco-not-found-content">
				<h1 className="eco-not-found-title">404</h1>
				<h2 className="eco-not-found-subtitle">Página no encontrada</h2>
				<p className="eco-not-found-text">
					Lo sentimos, la página que buscas no existe o ha sido movida.
				</p>
				<Link to="/" className="eco-not-found-button">
					Volver a inicio
				</Link>
			</div>
		</div>
	)
}

export default NotFound
