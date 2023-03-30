import { Container } from '@mui/material';

import Products from './components/products/Products';
import './App.css';
import FormContainer from './components/formContainer';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

function App() {


  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Container className="app-container">
        <FormContainer />
        <Products />
      </Container >
    </LocalizationProvider>
  );
}

export default App;
