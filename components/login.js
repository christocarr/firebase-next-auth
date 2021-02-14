import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/authContext';
import Form from '../components/Form';
import Label from '../components/Label';
import Input from '../components/Input';
import FormButton from '../components/FormButton';

function Login() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const router = useRouter();

  const { loginUser } = useAuth();

  async function handleSubmit(ev) {
    ev.preventDefault();
    try {
      setError('');
      setLoading(true);
      await loginUser(emailRef.current.value, passwordRef.current.value);
      router.push('/');
    } catch {
      setError('Incorrect email and password.');
    }
    setLoading(false);
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-2 text-center">Log in</h2>
        <Label htmlFor="username">Username</Label>
        <Input id="usernmame" type="text" required ref={emailRef} />
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" required ref={passwordRef} />
        {error ? (
          <div className="bg-red-200 p-1 mb-2">
            <p className="text-center text-red-600 mb-1 font-semibold">
              {error}
            </p>
          </div>
        ) : null}
        <FormButton disabled={loading} type="submit">
          Log in
        </FormButton>
      </Form>
      <p>
        Don't have an account?{' '}
        <span
          className="underline text-blue-700 cursor-pointer"
          onClick={() => router.push('/register')}
        >
          Register
        </span>
      </p>
    </>
  );
}

export default Login;
