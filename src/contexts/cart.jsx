import { createContext, useEffect, useState } from 'react';

const addCartItems = (cartItems, product) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === product.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  } else {
    return [...cartItems, { ...product, quantity: 1 }];
  }
};

const removeItemFromCart = (cartItems, product) => {
  return cartItems.filter((item) => item.id !== product.id);
};

const removeCartItems = (cartItems, product, all) => {
  if (all) {
    return removeItemFromCart(cartItems, product);
  }
  const existingQuantity = cartItems.find((item) => item.id === product.id).quantity;
  if (existingQuantity - 1) {
    return cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item));
  } else {
    return removeItemFromCart(cartItems, product);
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addCartItems(cartItems, product));
  };

  const removeItemFromCart = (product, all) => {
    setCartItems(removeCartItems(cartItems, product, all));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, cartCount, cartTotal };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
