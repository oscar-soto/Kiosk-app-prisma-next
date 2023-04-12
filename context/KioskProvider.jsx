import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const KioskContext = createContext();

export const KioskProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});

  // Get categories from API
  const getCategories = async () => {
    const { data } = await axios('/api/categories');
    setCategories(data);
  };

  // Get categories
  useEffect(() => {
    getCategories();
  }, []);

  // Default category
  useEffect(() => {
    setCurrentCategory(categories[0]);
  }, [categories]);

  // Select category with click
  const handleClickCategory = (id) => {
    const category = categories.filter((cat) => cat.id === id);
    setCurrentCategory(category[0]);
  };

  return (
    <KioskContext.Provider
      value={{ categories, currentCategory, handleClickCategory }}
    >
      {children}
    </KioskContext.Provider>
  );
};

export default KioskContext;
