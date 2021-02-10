import { useState } from 'react';

function Login({ handleIsRegistered }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <form>
        <label htmlFor="username">Username</label>
        <input id="usernmame" type="text" value={username} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={password} />
      </form>
      <p>
        Don't have an account?{' '}
        <span className="underline to-blue-500" onClick={handleIsRegistered}>
          Register
        </span>
      </p>
    </>
  );
}

export default Login;
