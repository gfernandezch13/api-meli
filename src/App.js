import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import ProductsContainer from './containers/ProductsContainer';

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeContainer shoppingCart={cart} />} />
          <Route path="/products" element={<ProductsContainer setCart={setCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
