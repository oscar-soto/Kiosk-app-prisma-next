import Modal from 'react-modal';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

import useKiosk from '@/hooks/useKiosk';

import { ModalProduct } from '@/components/ModalProduct';
import { Sidebar } from '@/components/Sidebar';
import { Steps } from '@/components/Steps';

import 'react-toastify/dist/ReactToastify.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');

const Layout = ({ children, page }) => {
  const { modal } = useKiosk();

  return (
    <>
      <Head>
        <title>Cáfe - {page}</title>
        <meta name="description" content="Quisco Cafetería" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            <Steps />
            {children}
          </div>
        </main>
      </div>

      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProduct />
        </Modal>
      )}

      <ToastContainer />
    </>
  );
};

export default Layout;
