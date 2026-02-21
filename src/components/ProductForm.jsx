import { useState } from "react";
import useProducts from "../hooks/useProducts";
import { v4 as uuidv4 } from 'uuid';

const ProductForm = ({ product, setShow }) => {
	const { modifyProduct, addProduct } = useProducts()

	const [error, setError] = useState(null)

	const handleModifyProduct = (product, e) => {
		e.preventDefault()
		const updatedProduct = {
			...product,
			title: e.target.title.value,
			description: e.target.description.value,
			price: parseFloat(e.target.price.value),
			image: e.target.image.value,
			category: e.target.category.value
		}
		try {
			modifyProduct(product.id, updatedProduct)
		} catch (error) {
			setError(error.message)
		}
	}

	const handleAddProduct = (id, e) => {
		e.preventDefault()
		const newProduct = {
			id: id,
			title: e.target.title.value,
			description: e.target.description.value,
			price: parseFloat(e.target.price.value),
			image: e.target.image.value,
			category: e.target.category.value
		}
		try {
			addProduct(newProduct)
		} catch (error) {
			setError(error.message)
		}
	}

	if (!product) {
		return (
			<div className="modal">
				<div className="modal-content">
					<h2>Crear Producto</h2>
					<form onSubmit={(e) => { handleAddProduct(uuidv4(), e) }}>
						<label htmlFor="title">Title</label>
						<input type="text" name="title" required />
						<label htmlFor="description">Description</label>
						<textarea name="description" required></textarea>
						<label htmlFor="price">Price</label>
						<input type="number" name="price" required />
						<label htmlFor="category">Category</label>
						<input type="text" name="category" required />
						<label htmlFor="image">Image URL</label>
						<input type="text" name="image" required />
						<button type="submit">Guardar</button>
						<button type="button" onClick={() => setShow(false)}>Cancelar</button>
					</form>
					{error && <p className="error">{error}</p>}
				</div>
			</div>
		)
	}

	return (
		<div className="modal">
			<div className="modal-content">
				<h2>Modificar Producto</h2>
				<form onSubmit={(e) => { handleModifyProduct(product, e) }}>
					<label htmlFor="title">Title</label>
					<input type="text" name="title" defaultValue={product.title} required />
					<label htmlFor="description">Description</label>
					<textarea name="description" defaultValue={product.description} required></textarea>
					<label htmlFor="price">Price</label>
					<input type="number" name="price" defaultValue={Number(product.price)} required />
					<label htmlFor="category">Category</label>
					<input type="text" name="category" defaultValue={product.category} required />
					<label htmlFor="image">Image URL</label>
					<input type="text" name="image" defaultValue={product.image} required />
					<button type="submit">Guardar</button>
					<button type="button" onClick={() => setShow(false)}>Cancelar</button>
				</form>
				{error && <p className="error">{error}</p>}
			</div>
		</div>
	)
}

export default ProductForm