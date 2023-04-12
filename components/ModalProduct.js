import Image from 'next/image';

import useKiosk from '@/hooks/useKiosk';
import { formatMoney } from '@/helpers';

export const ModalProduct = () => {
  const { product,handleChangeModal } = useKiosk();

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          src={`/assets/img/${product.image}.jpg`}
          alt={`Imagen producto ${product.name}`}
        />
      </div>

      <div className="md:w-2/3">
        <div className='flex justify-end'>
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

        <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatMoney(product.price)}
        </p>
      </div>
    </div>
  );
};
