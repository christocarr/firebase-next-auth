import Head from 'next/head';
import Register from '../components/register';
import Login from '../components/login';

import { useState } from 'react';

export default function Home() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleIsRegistered = () => {
    isRegistered ? setIsRegistered(false) : setIsRegistered(true);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        {/* favicon 
        <link rel="icon" href="" /> 
        */}
      </Head>

      <main className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center max-w-md md:max-w-xl">
          {!isRegistered ? (
            <Register handleIsRegistered={handleIsRegistered} />
          ) : (
            <Login handleIsRegistered={handleIsRegistered} />
          )}
        </div>
      </main>
    </div>
  );
}
