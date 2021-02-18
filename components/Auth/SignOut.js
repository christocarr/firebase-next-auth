import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/authContext';

function SignOut() {
  const [error, setError] = useState('');

  const router = useRouter();

  const { signOutUser } = useAuth();

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
      <button onClick={handleSignOut}>Sign out</button>
    </>
  );
}

export default SignOut;
