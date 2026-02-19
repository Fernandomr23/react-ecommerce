import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [username, setUsername] = useState(null)

	useEffect(() => {
		const userData = localStorage.getItem('userData')
		if (userData) {
			console.log(JSON.parse(userData))
			const { username } = JSON.parse(userData)
			setUsername(username)
		}
	}, [])

	const login = (localUser) => {
		localStorage.setItem('userData', JSON.stringify(localUser));
		setUsername(localUser.username);
	}

	const logout = (navigate) => {
		localStorage.removeItem('userData')
		setUsername(null)
		setTimeout(() => {
			if (navigate) navigate('/', { replace: true })
		}, 0)
	}

	return (
		<AuthContext.Provider value={{ username, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}