const InfoBarComponent = ({ shoppingCart }) => {
  return <div className="bg-info">Cantidad de productos seleccionados: {shoppingCart.length}</div>;
};

export default InfoBarComponent;
