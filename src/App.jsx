import { useEffect, useState } from 'react'
import Header from './components/Header'
import MainLayout from './components/MainLayout'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

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
    fetchProducts(null);
  }, []);

  return (
    <>
      <Header fetchProducts={fetchProducts} />
      <MainLayout products={products} />
      <Footer />
    </>
  )
}

export default App
