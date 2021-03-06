import Head from 'next/head';
import Header from '../Layout/Header';
import { Context } from '../../context/Context';
import Modal from '../Modal';
import ImageUpload from '../ImageUpload/ImageUpload';

function Layout({ children }) {
  const { showModal } = Context();
  return (
    <>
      <Head>
        <title>Pet Snap</title>
        <meta charSet="utf" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className="flex flex-col justify-center items-center max-w-screen-lg m-auto p-5">
        {children}
        {showModal && (
          <Modal>
            <ImageUpload />
          </Modal>
        )}
      </main>
    </>
  );
}

export default Layout;
