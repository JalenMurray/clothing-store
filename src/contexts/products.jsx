import { createContext, useState, useEffect } from 'react';

import PRODUCTS from '../shop-data.json';

import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

export const ProductsContext = createContext({
  products: [],
  setCurrentProducts: () => [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setCurrentProducts] = useState(PRODUCTS);
  const value = { products };
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};