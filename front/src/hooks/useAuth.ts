import { useContext } from "react"
import { AuthContext } from "../components/context/authContext"

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('AuthProvider must be used within a AuthProvider')
    }

    return context
}