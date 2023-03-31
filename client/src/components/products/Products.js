
import { Chip, Grid } from "@mui/material";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import ProductTable from "../ProductTable";

function Products() {
  const [products] = useContext(ProductsContext);

  return (
    <>
      <Grid mb={3}>
        <Chip label={`Total Products: ${products.length}`} variant="outlined" />
      </Grid>
      <ProductTable />
    </>
  );
}

export default Products;
