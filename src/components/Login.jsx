import { useState } from 'react';
import useAuth from '../hooks/useAuth';

const Login = () => {
	const { login } = useAuth()

	const [localUser, setLocalUser] = useState({ username: '', email: '' })
	const [error, setError] = useState('')

	const handleLogin = (e) => {
		e.preventDefault()

		if (!localUser.username || !localUser.email) {
			setError('Por favor, completa todos los campos.');
			return;
		}

		login(localUser)
		setError('')
		setLocalUser({
			username: '',
			email: ''
		})
	}

	return (
		<div className="eco-login">
			<h2 className="eco-login-title">Iniciar Sesión</h2>
			<form className="eco-login-form" onSubmit={(e) => handleLogin(e)}>
				<input
					type="text"
					placeholder="Usuario"
					className="eco-login-input"
					value={localUser.username}
					onChange={(e) => setLocalUser({ ...localUser, username: e.target.value })}
				/>
				<input
					type="email"
					placeholder="Email"
					className="eco-login-input"
					value={localUser.email}
					onChange={(e) => setLocalUser({ ...localUser, email: e.target.value })}
				/>
				<button type="submit" className="eco-login-button">Entrar</button>
			</form>
			{error && <p className="eco-login-error">{error}</p>}
		</div>
	)
}

export default Login;