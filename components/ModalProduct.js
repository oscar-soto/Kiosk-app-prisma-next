import { useEffect, useState } from 'react';
import Image from 'next/image';

import useKiosk from '@/hooks/useKiosk';
import { formatMoney } from '@/helpers';

export const ModalProduct = () => {
  const { product, handleChangeModal, handleAddOrder, order } = useKiosk();
  const [amount, setAmount] = useState(1);
  const [edition, setEdition] = useState(false);

  useEffect(() => {
    // Check if the modal is in the order
    const modalInOrder = order.some(
      (orderState) => orderState.id === product.id
    );

    if (modalInOrder) {
      const productEdit = order.find(
        (orderState) => orderState.id === product.id
      );

      setEdition(true);
      setAmount(productEdit.amount);
    }
  }, [order, product]);

  return (
    <div className="md:flex gap-10">
      {/* Image Product */}
      <figure className="md:w-1/3">
        <Image
          width={300}
          height={400}
          src={`/assets/img/${product.image}.jpg`}
          alt={`Imagen producto ${product.name}`}
        />
      </figure>

      <div className="md:w-2/3">
        {/* Close btn */}
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatMoney(product.price)}
        </p>

        {/* Amount btns */}
        <div className="flex gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              if (amount <= 1) return;
              setAmount(amount - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>

          <p className="text-3xl">{amount}</p>

          <button
            type="button"
            onClick={() => {
              if (amount >= 5) return;
              setAmount(amount + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        {/* Add order btn */}
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
          onClick={() => handleAddOrder({ ...product, amount })}
        >
          {edition ? 'Guardar cambios' : 'Añadir al pedido'}
        </button>
      </div>
    </div>
  );
};
