import { Container } from '@mui/material';

import Products from './components/products/Products';
import './App.css';
import FormContainer from './components/formContainer';

function App() {


  return (
    <Container className="app-container">
      <FormContainer />
      <Products />
    </Container >
  );
}

export default App;
