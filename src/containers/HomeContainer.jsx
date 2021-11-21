import { Link } from 'react-router-dom';

const HomeContainer = ({ shoppingCart }) => {
  return (
    <>
      <Link to="/products">Go products</Link>
      <h1>¡Hello! The quantity of products you selected is: {shoppingCart.length}</h1>
    </>
  );
};

export default HomeContainer;
