import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Form from '../Form';
import Label from '../Label';
import Input from '../Input';
import FormButton from '../FormButton';
import { useAuth } from '../../context/authContext';

function ResetPassword() {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState('');
  const { passwordReset } = useAuth();
  const emailRef = useRef();
  const router = useRouter();

  async function handleForgottenPassword(ev) {
    ev.preventDefault();
    setError('');
    try {
      await passwordReset(emailRef.current.value);
      emailRef.current.value = '';
      setMessage('Please check your email to reset your password.');
    } catch (err) {
      setError('Could not allow password reset.');
    }
  }

  return (
    <>
      <Form onSubmit={handleForgottenPassword}>
        <h2 className="text-xl font-semibold mb-2 text-center">
          Password reset
        </h2>

        <Label htmlFor="email">Email</Label>
        <Input id="email" ref={emailRef} />
        {error ? (
          <div className="bg-red-200 p-1 mb-2">
            <p className="text-center text-red-600 mb-1 font-semibold">
              {error}
            </p>
          </div>
        ) : null}
        {message ? (
          <div className="bg-green-200 p-1 mb-2">
            <p className="text-center text-green-600 mb-1 font-semibold">
              {message}
            </p>
          </div>
        ) : null}
        <FormButton type="submit">Reset password</FormButton>
      </Form>
      <p>
        Back to login{' '}
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

export default ResetPassword;
