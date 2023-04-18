import { useCallback, useEffect } from 'react';
import Layout from '@/layout/Layout';
import useKiosk from '@/hooks/useKiosk';

export default function Total() {
  const { order } = useKiosk();

  const checkOrder = useCallback(() => {
    return order.length === 0;
  }, [order]);

  useEffect(() => {
    checkOrder();
  }, [order, checkOrder]);

  const sendOrder = (e) => {
    e.preventDefault();
  };

  return (
    <Layout page="Total y Confirmar Pedido">
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>

      <form onSubmit={sendOrder}>
        <div>
          <label
            className="block uppercase text-slate-800 font-bold text-xl"
            htmlFor="name"
          >
            Nombre
          </label>

          <input
            type="text"
            id="name"
            className="bg-gray-200 w-full mt-3 lg:w-1/3 p-2 rounded-md"
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: <span className="font-bold">$200</span>
          </p>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            value="Confirmar pedido"
            className="w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white bg-indigo-600 text-center hover:bg-indigo-800 hover:cursor-pointer transition-colors duration-300 disabled:bg-indigo-100 disabled:cursor-not-allowed"
            disabled={checkOrder()}
          />
        </div>
      </form>
    </Layout>
  );
}
