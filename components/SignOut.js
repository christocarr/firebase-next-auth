import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '../context/authContext';

function SignOut() {
  const [error, setError] = useState('');

  const router = useRouter();

  const { currentUser, signOutUser } = useAuth();

  async function handleSignOut() {
    try {
      setError('');
      await signOutUser();
      router.push('/login');
    } catch {
      setError('Can not sign you out.');
    }
  }
  return (
    <>
      <h2 className="mb-2 text-center">User Profile</h2>
      <p>Email: </p>
      {error ? (
        <div className="bg-red-200 p-1 mb-2">
          <p className="text-center text-red-600 mb-1 font-semibold">{error}</p>
        </div>
      ) : null}
      <Link href="/update-profile" passHref>
        <button>Update profile</button>
      </Link>
      <button onClick={handleSignOut}>Sign out</button>
    </>
  );
}

export default SignOut;
