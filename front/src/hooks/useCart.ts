import { useContext } from "react"
import { CartContext } from "../context/cartContext"

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }

    return context
}