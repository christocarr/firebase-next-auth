import { useState } from 'react';

function Login({ handleIsRegistered }) {
  return (
    <>
      <form>
        <h2 className="mb-2 text-center">Log in</h2>
        <label htmlFor="username">Username</label>
        <input id="usernmame" type="text" required />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" required />
        <button type="submit">Log in</button>
      </form>
      <p>
        Don't have an account?{' '}
        <span
          className="underline text-blue-700 cursor-pointer"
          onClick={handleIsRegistered}
        >
          Register
        </span>
      </p>
    </>
  );
}

export default Login;
