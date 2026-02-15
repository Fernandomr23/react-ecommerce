import { useEffect, useState } from 'react'
import useTheme from './hooks/useTheme'
import Header from './components/Header'
import MainLayout from './components/MainLayout'
import Footer from './components/Footer'
import './App.css'

function App() {
  const { mode } = useTheme()
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
    <div className={`eco-app ${mode}`}>
      <Header fetchProducts={fetchProducts} />
      <MainLayout products={products} />
      <Footer />
    </div>
  )
}

export default App
