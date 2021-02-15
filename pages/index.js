import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../context/authContext';
import Layout from '../components/Layout/Layout';
import FormButton from '../components/FormButton';

export default function Home() {
  const [error, setError] = useState('');
  const { currentUser, signOutUser } = useAuth();
  const router = useRouter();

  //prevents user from going to index when logged out
  if (!currentUser) {
    router.push('/login');
  }

  async function handleSignOut() {
    setError('');
    try {
      await signOutUser();
      router.push('/login');
    } catch (err) {
      setError(err);
    }
  }

  return (
    <Layout>
      <Link href="/profile">Profile</Link>
      <FormButton onClick={handleSignOut}>Sign out</FormButton>
      {/* <Link href="/login" OnClick={() => handleSignOut}>
        Sign out
      </Link> */}
    </Layout>
  );
}
