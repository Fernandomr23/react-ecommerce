import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './views/Layout'
import Home from './views/Home'
import ProductDetails from './views/ProductDetails'
import Login from './views/Login'
import CartPage from './views/CartPage'
import NotFound from './views/NotFound'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async (filter) => {
    const newProducts = await fetch('https://fakestoreapi.com/products')
      .then(response => response.json());

    if (filter) {
      const filtered = newProducts.filter(product =>
        product.title.toLowerCase().includes(filter.toLowerCase())
      );
      setProducts(filtered);
    } else {
      setProducts(newProducts);
    }
  }

  useEffect(() => {
    fetchProducts(null)
  }, [])

  return (
    <BrowserRouter>
      <Layout fetchProducts={fetchProducts}>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/product/:id"
            element={<ProtectedRoute><ProductDetails products={products} /></ProtectedRoute>}
          />
          <Route
            path="/cart"
            element={<ProtectedRoute><CartPage /></ProtectedRoute>}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
