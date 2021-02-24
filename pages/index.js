import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Context } from '../context/Context';
import Layout from '../components/Layout/Layout';
import ImageGrid from '../components/ImageGrid';
import useAppFirestore from '../hooks/useAppFirestore';

export default function Home() {
  const [error, setError] = useState('');
  const [images, setImages] = useState('');
  const { currentUser, signOutUser } = Context();
  const router = useRouter();
  const docs = useAppFirestore('images');

  //prevents user from going to index when logged out
  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    }
  }, []);

  return (
    <Layout>
      <ImageGrid images={docs} />
    </Layout>
  );
}
