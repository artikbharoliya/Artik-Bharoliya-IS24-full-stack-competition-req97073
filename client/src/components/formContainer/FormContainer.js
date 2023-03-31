import { Button, Grid } from "@mui/material";
import { useState } from "react";
import ProductModal from "../productModal";

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
