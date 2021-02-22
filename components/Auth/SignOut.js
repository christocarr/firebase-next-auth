import { useState } from 'react';
import { useRouter } from 'next/router';
import { Context } from '../../context/Context';

function SignOut() {
  const [error, setError] = useState('');

  const router = useRouter();

  const { signOutUser } = Context();

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
