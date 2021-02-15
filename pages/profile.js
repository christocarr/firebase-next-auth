import { useState } from 'react';
import { useRouter } from 'next/router';
import SignOut from '../components/SignOut';
import Link from 'next/link';
import { useAuth } from '../context/authContext';
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
    <div className="m-auto w-5/6 max-w-sm h-screen flex flex-col justify-center items-center">
      {currentUser && <p>Email: {currentUser.email}</p>}
      <Link href="/update-profile">Update profile</Link>
    </div>
  );
}

export default userProfile;
