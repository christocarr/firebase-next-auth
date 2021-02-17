import Head from 'next/head';
import Header from '../Layout/Header';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Pet Snap</title>
        <meta charSet="utf" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-5/6 max-w-sm">
          {children}
        </div>
      </main>
    </>
  );
}

export default Layout;
