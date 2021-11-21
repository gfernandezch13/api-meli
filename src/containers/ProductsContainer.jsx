import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CardComponent from '../components/CardComponent';
import InfoBarComponent from '../components/InfoBarComponent';
import { EcommerceContext } from '../context/EcommerceContext';

const ProductsContainer = () => {
  const [searchInput, setSearchInput] = useState('');
  const { products, shoppingCart, setShoppingCart, getProducts } = useContext(EcommerceContext);
  const { searchParam } = useParams();
  console.log(searchParam);

  useEffect(() => {
    getProducts(searchParam ? searchParam : searchInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

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
