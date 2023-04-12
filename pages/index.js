import useKiosk from '@/hooks/useKiosk';
import Layout from '@/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const { currentCategory } = useKiosk();
  return (
    <>
      <Layout page={`Menú ${currentCategory?.name || 'comida' }`}>
        <h1 className='text-4xl font-black'>{currentCategory?.name}</h1>
        <p className='text-2xl my-10'>
          Elige y personaliza tu pedido
        </p>
      </Layout>
    </>
  );
}
