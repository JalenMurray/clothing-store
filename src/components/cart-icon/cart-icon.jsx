import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

import './cart-icon.styles.js';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles.js';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
