import { Button, Grid } from "@mui/material";
import { useState } from "react";
import ProductModal from "../productModal";
// Contains the Button for adding data, in the future could be used to add the search fields at the top of the webpage.
function FormContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Grid container mb={4}>
        <Grid item xs={2} container justifyContent="flex-start">
          <Button variant="contained" onClick={() => setIsModalOpen(!isModalOpen)}>Add Product +</Button>
          <ProductModal open={isModalOpen} setOpen={setIsModalOpen} title="Add Product" buttonTitle="Add Product" />
        </Grid>
      </Grid>

    </>
  );
}

export default FormContainer;
