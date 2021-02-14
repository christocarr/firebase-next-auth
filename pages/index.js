import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '../context/authContext';

export default function Home() {
  const { signOutUser } = useAuth;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        {/* favicon 
        <link rel="icon" href="" /> 
        */}
      </Head>
      <Link href="/user-profile">Profile</Link>
      <Link href="/login" OnClick={() => signOutUser}>
        Sign out
      </Link>
      <main className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-5/6 max-w-sm"></div>
      </main>
    </div>
  );
}
