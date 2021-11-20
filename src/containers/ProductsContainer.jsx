import { useEffect, useState } from 'react';
import CardComponent from '../components/CardComponent';
import InfoBarComponent from '../components/InfoBarComponent';

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=mac');
      const responseJson = await response.json();
      setProducts(responseJson.results);
    };

    getProducts();
  }, []);

  const addProductToCart = (product) => setShoppingCart([...shoppingCart, product]);

  return (
    <div className="container">
      <InfoBarComponent shoppingCart={shoppingCart} />
      <div className="row px-2 py-2">
        {products.map((product) => (
          <CardComponent key={product.id} product={product} addProductToCart={addProductToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
