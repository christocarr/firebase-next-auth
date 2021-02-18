import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/authContext';
import { Form, Label, Input, FormButton } from '../Form/';

function Register() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const router = useRouter();

  const { register, currentUser } = useAuth();

  async function handleSubmit(ev) {
    ev.preventDefault();

    if (currentUser && currentUser.email === emailRef.current.value) {
      return setError('This email is already registered. Please log in.');
    }

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match.');
    }

    try {
      setError('');
      setLoading(true);
      await register(emailRef.current.value, passwordRef.current.value);
      router.push('/');
    } catch {
      setError('Can not register your credentials. Please try again.');
    }
    setLoading(false);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-2 text-center">Register</h2>
        <Label htmlFor="username">Username</Label>
        <Input id="usernmame" type="email" required ref={emailRef} />
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" required ref={passwordRef} />
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input
          id="confirmPassword"
          type="password"
          required
          ref={confirmPasswordRef}
        />
        {error ? (
          <div className="bg-red-200 p-1 mb-2">
            <p className="text-center text-red-600 mb-1 font-semibold">
              {error}
            </p>
          </div>
        ) : null}
        <FormButton disabled={loading} type="submit">
          Register
        </FormButton>
      </Form>
      <p>
        Already have an account?{' '}
        <span
          className="underline text-blue-700 cursor-pointer"
          onClick={() => router.push('/login')}
        >
          Log in
        </span>
      </p>
    </>
  );
}

export default Register;
