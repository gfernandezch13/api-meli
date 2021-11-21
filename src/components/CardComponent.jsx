const CardComponent = ({ product, addProductToCart }) => {
  return (
    <div className="card col-4">
      <img src={product.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {product.title} - ${product.price}
        </h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
        <button className="btn btn-primary" onClick={() => addProductToCart(product.id)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
