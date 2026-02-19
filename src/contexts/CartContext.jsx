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

	const handleConfirmPurchase = () => {
		alert('¡Compra confirmada! Se redirigirá a la pasarela de pago.');
		setCart([]); 
	}

	return (
		<CartContext.Provider value={{ cart, setCart, showCart, setShowCart, handleAddToCart, handleConfirmPurchase }}>
			{children}
		</CartContext.Provider>
	)
}