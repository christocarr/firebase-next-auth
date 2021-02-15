import { useState } from 'react';
import { useRouter } from 'next/router';
import SignOut from '../components/SignOut';
import Link from 'next/link';
import { useAuth } from '../context/authContext';
import Layout from '../components/Layout/Layout';
import FormButton from '../components/FormButton';
import Form from '../components/Form';

function userProfile() {
  const { currentUser } = useAuth();
  const router = useRouter();

  //prevents user from going to index when logged out
  if (!currentUser) {
    router.push('/login');
  }

  return (
    <Layout>
      {currentUser && <p>Email: {currentUser.email}</p>}
      <Link href="/update-profile">Update profile</Link>
    </Layout>
  );
}

export default userProfile;
