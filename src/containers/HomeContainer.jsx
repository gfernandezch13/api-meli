import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EcommerceContext } from '../context/EcommerceContext';

const HomeContainer = () => {
  const { shoppingCart } = useContext(EcommerceContext);
  return (
    <>
      <Link to="/products">Go products</Link>
      <h1>¡Hello! The quantity of products you selected is: {shoppingCart.length}</h1>
    </>
  );
};

export default HomeContainer;
