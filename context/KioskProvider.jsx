import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const KioskContext = createContext();

export const KioskProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);
  // const [step, setStep] = useState(1)

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
  const handleAddOrder = ({ categoryId, ...product }) => {
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
      toast.success('Guardado Correctamente');
    } else {
      setOrder([...order, product]);
      toast.success('Agregado al Pedido');
    }

    setModal(false);
  };

  // Changes Steps
  // const handleChangeStep = (step) => {
  //   setStep(step)
  // }

  // Edit Amount
  const handleEditAmount = (id) => {
    const orderUpdated = order.filter((product) => product.id === id);
    setProduct(orderUpdated[0]);

    setModal(!modal);
  };

  // Delete a producto into the order
  const handleDeleteProduct = (id) => {
    const orderUpdated = order.filter((product) => product.id !== id);
    setOrder(orderUpdated);
  };

  return (
    <KioskContext.Provider
      value={{
        categories,
        currentCategory,
        product,
        modal,
        order,
        // step,
        handleClickCategory,
        handleSetProduct,
        handleChangeModal,
        handleAddOrder,
        // handleChangeStep
        handleEditAmount,
        handleDeleteProduct,
      }}
    >
      {children}
    </KioskContext.Provider>
  );
};

export default KioskContext;
