import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext({});

const api_url = 'api/products';
// Context to store the products data
const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState({});

  // fetching the data to initialize the context.
  const fetchProducts = async () => {
    fetch(api_url)
      .then((response) => (response.json()))
      .then((productsData) => {
        setProducts(productsData);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;