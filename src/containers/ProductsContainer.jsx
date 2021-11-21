import { useEffect, useState } from 'react';
import CardComponent from '../components/CardComponent';
import InfoBarComponent from '../components/InfoBarComponent';

const ProductsContainer = ({ setCart }) => {
  const [searchInput, setSearchInput] = useState('');
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    const getProducts = async (searchParam) => {
      const response = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${searchParam}`
      );
      const responseJson = await response.json();
      setProducts(responseJson.results);
    };

    getProducts(searchInput);
  }, [searchInput]);

  useEffect(() => {
    setCart(shoppingCart);
  }, [shoppingCart]);

  const addProductToCart = (product) => setShoppingCart([...shoppingCart, product]);
  const handleKeyPress = (e) => e.charCode === 13 && setSearchInput(e.target.value);

  return (
    <div className="container">
      <InfoBarComponent shoppingCart={shoppingCart} handleKeyPress={handleKeyPress} />
      <div className="row px-2 py-2">
        {products.map((product) => (
          <CardComponent key={product.id} product={product} addProductToCart={addProductToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
