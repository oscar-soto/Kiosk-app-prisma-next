import { PrismaClient } from '@prisma/client';

import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ categories }) {
  console.log(categories);
  return (
    <>
      <h1>Next JS</h1>
    </>
  );
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany();

  return {
    props: {
      categories,
    },
  };
};
