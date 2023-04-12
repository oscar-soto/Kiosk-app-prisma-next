import { Sidebar } from '@/components/Sidebar';
import Head from 'next/head';

const Layout = ({ children, page }) => {
  return (
    <>
      <Head>
        <title>Cáfe - {page}</title>
        <meta name="description" content="Quisco Cafetería" />
      </Head>

      <div className="md:flex max-w-screen-2xl mx-auto">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
