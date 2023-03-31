import { Alert, Snackbar } from "@mui/material";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext({});

const api_url = 'api/products';
// Context to store the products data
const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState({});

  const [error, setError] = useState(false);
  // fetching the data to initialize the context.
  const fetchProducts = async () => {
    const response = await fetch(api_url);
    if (!response.ok) {
      setError(true);
    }
    const products = await response.json();
    setProducts(products);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      <Snackbar open={error} autoHideDuration={6000} >
        <Alert severity="error" sx={{ width: '100%' }}>
          Can't fetch the products!
        </Alert>
      </Snackbar>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;