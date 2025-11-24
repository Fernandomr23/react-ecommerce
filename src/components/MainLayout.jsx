const MainLayout = ({ products }) => {
	  return (
		<main className="eco-main">
			<div className="eco-banner">
				<span className="eco-banner-text">
					¡20% de descuento para nuevos clientes!
				</span>
			</div>
			<section className="eco-product-list">
				{products.map(product => (
					<div key={product.id} className="eco-product-card">
						<img src={product.image} alt={product.name} className="eco-product-image" />
						<h2 className="eco-product-name">{product.title}</h2>
						<p className="eco-product-desc">{product.description}</p>
						<p className="eco-product-price">${product.price}</p>
					</div>
				))}
			</section>
		</main>
	  )
}

export default MainLayout