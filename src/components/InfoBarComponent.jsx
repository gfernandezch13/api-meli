import { Link } from 'react-router-dom';

const InfoBarComponent = ({ shoppingCart, handleKeyPress }) => {
  return (
    <div className="bg-info">
      <div>
        <input type="text" onKeyPress={handleKeyPress} placeholder="Search by product name" />
      </div>
      <Link to="/">Go home</Link>
      <br />
      Quantity of selected products: {shoppingCart.length}
    </div>
  );
};

export default InfoBarComponent;
