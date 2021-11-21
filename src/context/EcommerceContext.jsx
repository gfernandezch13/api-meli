import { createContext, useState } from 'react';

export const EcommerceContext = createContext();

export const EcommerceProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  const getProducts = async (searchParam) => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchParam}`);
    const responseJson = await response.json();
    setProducts(responseJson.results);
  };

  return (
    <EcommerceContext.Provider value={{ products, shoppingCart, setShoppingCart, getProducts }}>
      {children}
    </EcommerceContext.Provider>
  );
};
