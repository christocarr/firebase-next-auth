import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Context } from '../context/Context';
import Layout from '../components/Layout/Layout';
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/Modal';

export default function Home() {
  const [error, setError] = useState('');
  const { currentUser, signOutUser, showModal } = Context();
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
      {showModal && <Modal />}
    </Layout>
  );
}
