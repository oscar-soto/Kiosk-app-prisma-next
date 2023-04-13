import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const KioskContext = createContext();

export const KioskProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);

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

  // Set current product
  const handleSetProduct = (product) => {
    setProduct(product);
  };

  // Toggle modal
  const handleChangeModal = () => {
    setModal(!modal);
  };

  // Add order
  const handleAddOrder = ({ categoryId, image, ...product }) => {
    const exitsProductId = order.some(
      (productState) => productState.id === product.id
    );

    if (exitsProductId) {
      // Check order and updated
      const orderUpdated = order.map((productState) =>
        productState.id === product.id ? product : productState
      );

      // Updated state
      setOrder(orderUpdated);
      setModal(false)
      return;
    }

    setOrder([...order, product]);
    setModal(false)
  };

  return (
    <KioskContext.Provider
      value={{
        categories,
        currentCategory,
        product,
        modal,
        order,
        handleClickCategory,
        handleSetProduct,
        handleChangeModal,
        handleAddOrder,
      }}
    >
      {children}
    </KioskContext.Provider>
  );
};

export default KioskContext;
