import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Context } from '../context/Context';
import Layout from '../components/Layout/Layout';
import ImageGrid from '../components/ImageGrid';
import useAppFirestore from '../hooks/useAppFirestore';
import { FormButton } from '../components/Form';

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
      <div>
        {currentUser && <p className="mb-2">{currentUser.email}</p>}
        <FormButton>
          <Link href="/update-profile">Settings</Link>
        </FormButton>
      </div>
      <ImageGrid images={images} />
    </Layout>
  );
}

export default userProfile;
