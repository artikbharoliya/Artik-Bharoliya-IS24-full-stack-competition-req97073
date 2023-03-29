import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    fetch('/api/products').then(data => console.log(data))

  }, [])

  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
