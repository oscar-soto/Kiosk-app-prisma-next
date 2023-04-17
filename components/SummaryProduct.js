import Image from 'next/image';

import { formatMoney } from '@/helpers';

export const SummaryProduct = ({ product }) => {
  const { name, image, price, amount } = product;
  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      <div className="md:w-1/6">
        <Image
          width={300}
          height={400}
          alt={`Imagen producto ${name}`}
          src={`/assets/img/${image}.jpg`}
        />
      </div>

      <div className="md:w-5/6">
        <p className="text-3xl font-bold">{name}</p>
        <p className="text-xl font-bold">Cantidad: {amount}</p>
        <p className="text-xl font-bold text-amber-500">
          Precio: {formatMoney(price)}
        </p>
        <p className="text-sm text-gray-700">
          Subtotal: {formatMoney(price * amount)}
        </p>
      </div>
    </div>
  );
};
