import { useRef } from 'react';

function Register({ handleIsRegistered }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <>
      <form>
        <h2 className="mb-2 text-center">Register</h2>
        <label htmlFor="username">Username</label>
        <input id="usernmame" type="email" required ref={emailRef} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" required ref={passwordRef} />
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          id="confirmPassword"
          type="password"
          required
          ref={confirmPasswordRef}
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{' '}
        <span
          className="underline text-blue-700 cursor-pointer"
          onClick={handleIsRegistered}
        >
          Log in
        </span>
      </p>
    </>
  );
}

export default Register;
