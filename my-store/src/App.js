import react from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Products/>
    </>
  );
}

export default App;
