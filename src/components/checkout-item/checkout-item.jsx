import './checkout-item.scss';

const CheckoutItem = ({ item, addHandler, removeHandler }) => {
  const { name, imageUrl, price, quantity } = item;

  const addSingleItemToCart = () => addHandler(item);

  const removeSingleItemFromCart = () => removeHandler(item);

  const removeAllItemFromCart = () => removeHandler(item, true);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <h2 className="name">{name}</h2>
      <span className="quantity">
        <div className="arrow" onClick={removeSingleItemFromCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addSingleItemToCart}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={removeAllItemFromCart}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
