import { useEffect, createContext, useState } from 'react'
import axios from 'axios'

export const ProductsContext = createContext()

const API_URL = 'http://localhost:3000/products'

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetchProducts(null)
	}, [])

	const fetchProducts = async (filter) => {
		try {
			const newProducts = await axios.get(API_URL)

			if (filter) {
				const filtered = newProducts.data.filter(product =>
					product.title.toLowerCase().includes(filter.toLowerCase())
				);
				setProducts(filtered);
			} else {
				setProducts(newProducts.data);
			}
		} catch (error) {
			console.error('Error fetching products:', error)

		}
	}

	const fetchSingleProduct = async (id) => {
		try {
			const response = await axios.get(`${API_URL}/${id}`)
			return response.data
		} catch (error) {
			console.error('Error fetching single product:', error)
			throw error
		}
	}

	const addProduct = async (product) => {
		try {
			const response = await axios.post(API_URL, product)
			console.log("🚀 ~ addProduct ~ response:", response);
			setProducts([...products, response.data])
		} catch (error) {
			console.error('Error adding product:', error)
		}
	}

	const deleteProduct = async (id) => {
		try {
			await axios.delete(`${API_URL}/${id}`)
			setProducts(products.filter(product => product.id !== id))
		} catch (error) {
			console.error('Error deleting product:', error)
		}
	}

	const modifyProduct = async (id, updatedProduct) => {
		try {
			const response = await axios.put(`${API_URL}/${id}`, updatedProduct)
			setProducts(products.map(product => product.id === id ? response.data : product))
		} catch (error) {
			console.error('Error modifying product:', error)
		}
	}

	return (
		<ProductsContext.Provider value={{ products, fetchProducts, addProduct, deleteProduct, modifyProduct, fetchSingleProduct }}>
			{children}
		</ProductsContext.Provider>
	)
}