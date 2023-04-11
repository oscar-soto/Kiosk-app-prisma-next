import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const KioskContext = createContext();

export const KioskProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const { data } = await axios('/api/categories');
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <KioskContext.Provider value={{ categories }}>
      {children}
    </KioskContext.Provider>
  );
};

export default KioskContext;
