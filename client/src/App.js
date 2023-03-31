// Entry point for the react app.
import { Container } from '@mui/material';
import Products from './components/products/Products';
import './App.css';
import FormContainer from './components/formContainer';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import ProductsContextProvider from './context/ProductsContext';

function App() {
  return (
    <ProductsContextProvider>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Container className="app-container">
          <FormContainer />
          <Products />
        </Container >
      </LocalizationProvider>
    </ProductsContextProvider>
  );
}

export default App;
