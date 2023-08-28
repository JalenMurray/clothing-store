import { useContext } from 'react';

import './checkout.scss';

import { CartContext } from '../../contexts/cart';

import CheckoutItem from '../../components/checkout-item/checkout-item';

const Checkout = () => {
  const { cartItems, cartTotal, addItemToCart, removeItemFromCart } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} addHandler={addItemToCart} removeHandler={removeItemFromCart} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
