import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SignOut } from '../components/Auth';
import Link from 'next/link';
import { useAuth } from '../context/authContext';
import Layout from '../components/Layout/Layout';

function userProfile() {
  const { currentUser } = useAuth();
  const router = useRouter();

  //prevents user from going to index when logged out
  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    }
  }, []);

  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-2 text-center">User profile</h2>
      {currentUser && <p>Email: {currentUser.email}</p>}
      <Link href="/update-profile">Update profile</Link>
      <SignOut />
    </Layout>
  );
}

export default userProfile;
