import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Context } from '../context/Context';
import Layout from '../components/Layout/Layout';
import ImageGrid from '../components/ImageGrid';
import useAppFirestore from '../hooks/useAppFirestore';

function userProfile() {
  const [images, setImages] = useState();
  const { currentUser } = Context();
  const router = useRouter();
  const docs = useAppFirestore('images');

  //prevents user from going to index when logged out
  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    } else {
      const images = docs.filter((doc) => doc.user === currentUser.email);
      setImages(images);
    }
  }, [docs]);

  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-2 text-center">User profile</h2>
      {currentUser && <p>Email: {currentUser.email}</p>}
      <Link href="/update-profile">Update profile</Link>
      <ImageGrid images={images} />
    </Layout>
  );
}

export default userProfile;
