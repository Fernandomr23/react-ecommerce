import { Navigate, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const ProtectedRoute = ({ children }) => {
	const { username } = useAuth()
	const location = useLocation()

	if (!username) {
		return <Navigate to="/login" state={{ from: location }} replace />
	}

	return children
}

export default ProtectedRoute