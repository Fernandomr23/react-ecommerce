import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])
	const [showCart, setShowCart] = useState(false)

	const handleAddToCart = (product) => {
		const cartItem = { ...product, quantity: 1 }

		if (cart.some(item => item.id === product.id)) {
			setCart(prev => prev.map(item => {
				if (item.id === product.id) {
					return { ...item, quantity: item.quantity + 1 }
				}
				return item;
			}))
		} else {
			setCart(prev => [...prev, cartItem])
		}
	}

	return (
		<CartContext.Provider value={{ cart, handleAddToCart, showCart, setShowCart }}>
			{children}
		</CartContext.Provider>
	)
}