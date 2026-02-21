import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

const useProducts = () => {
	const context = useContext(ProductsContext)

	return context
}

export default useProducts