import { useState } from 'react';
import Link from 'next/link';

function Register({ handleIsRegistered }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <form>
        <label htmlFor="username">Username</label>
        <input id="usernmame" type="email" value={username} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <label htmlFor="confirmPassword">Confirm password</label>
        <input id="confirmPassword" type="password" value={password} />
      </form>
      <p>
        Already have an account?{' '}
        <span className="underline to-blue-500" onClick={handleIsRegistered}>
          Log in
        </span>
      </p>
    </>
  );
}

export default Register;
