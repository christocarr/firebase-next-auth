import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/authContext';
import Layout from '../components/Layout/Layout';
import ImageGrid from '../components/ImageGrid';

export default function Home() {
  const [error, setError] = useState('');
  const { currentUser, signOutUser } = useAuth();
  const router = useRouter();

  //prevents user from going to index when logged out
  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    }
  }, []);

  return (
    <Layout>
      <ImageGrid />
    </Layout>
  );
}
