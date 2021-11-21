const InfoBarComponent = ({ shoppingCart, handleKeyPress }) => {
  return (
    <div className="bg-info">
      <div>
        <input type="text" onKeyPress={handleKeyPress} placeholder="Search by product name" />
      </div>
      Quantity of selected products: {shoppingCart.length}
    </div>
  );
};

export default InfoBarComponent;
