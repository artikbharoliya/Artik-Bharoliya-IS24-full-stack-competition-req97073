
import { Chip, Grid } from "@mui/material";
import ProductTable from "../ProductTable";

function Products() {

  return (
    <>
      <Grid mb={3}>
        <Chip label="Total Products: 256" variant="outlined" />
      </Grid>
      <ProductTable />
    </>
  );
}

export default Products;
