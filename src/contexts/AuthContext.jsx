import { createContext, useState } from "react";

export const AuthContext = createContext()

const getInitialAuth = () => {
	try {
		const userData = localStorage.getItem('userData')
		return userData ? JSON.parse(userData) : { username: null, role: null }
	} catch {
		return { username: null, role: null }
	}
}

export const AuthProvider = ({ children }) => {
	const [username, setUsername] = useState(() => getInitialAuth().username)
	const [role, setRole] = useState(() => getInitialAuth().role)

	const login = (localUser) => {
		localStorage.setItem('userData', JSON.stringify(localUser));
		setUsername(localUser.username);
		setRole(localUser.role);
	}

	const logout = (navigate) => {
		localStorage.removeItem('userData')
		setUsername(null)
		setRole(null)
		setTimeout(() => {
			if (navigate) navigate('/', { replace: true })
		}, 0)
	}

	return (
		<AuthContext.Provider value={{ username, role, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}