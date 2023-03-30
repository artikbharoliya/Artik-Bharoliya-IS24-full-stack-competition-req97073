import { Button, Grid } from "@mui/material";
import SearchField from "../searchField";

function FormContainer() {
  return (
    <>
      <Grid container mb={4}>
        <Grid item xs={5} container justifyContent="flex-start">
          <SearchField />
        </Grid>
        <Grid item xs={5} container justifyContent="center">
          <SearchField />
        </Grid>
        <Grid item xs={2} container justifyContent="flex-end">
          <Button variant="contained">Add Product +</Button>
        </Grid>
      </Grid>

    </>
  );
}

export default FormContainer;
