import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import ProductsContainer from './containers/ProductsContainer';
import { EcommerceProvider } from './context/EcommerceContext';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <EcommerceProvider>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/products" element={<ProductsContainer />} />
            <Route path="/products/:searchParam" element={<ProductsContainer />} />
          </Routes>
        </EcommerceProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
