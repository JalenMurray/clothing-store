import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categories: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCategoriesAndDocuments();
      setCategories(categories);
    };
    getCategories();
  }, []);

  const value = { categories };
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
