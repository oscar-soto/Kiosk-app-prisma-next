import { formatMoney } from '@/helpers';
import useKiosk from '@/hooks/useKiosk';
import Image from 'next/image';

export const Product = ({ product }) => {
  const { handleSetProduct, handleChangeModal } = useKiosk();

  const { name, image, price } = product;

  return (
    <div className="border p-3">
      <Image
        src={`/assets/img/${image}.jpg`}
        alt={`Imagen Platillo ${name}`}
        width={400}
        height={500}
        className="w-96 h-auto"
        priority
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatMoney(price)}
        </p>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase"
          onClick={() => {
            handleChangeModal();
            handleSetProduct(product);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};
