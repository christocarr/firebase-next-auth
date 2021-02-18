import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/authContext';
import { Form, Label, Input, FormButton } from '../Form/';

function UpdateEmailPassword() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const router = useRouter();

  const { currentUser, updateEmail, updatePassword } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    }
  }, []);

  function handleSubmit(ev) {
    ev.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match.');
    }

    const promises = [];
    setLoading(true);
    setError('');

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        router.push('/');
      })
      .catch(() => {
        setError('Failed to change credentials');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-2 text-center">
          Update Email and Password
        </h2>
        <Label htmlFor="username">Username</Label>
        <Input
          id="usernmame"
          type="email"
          required
          ref={emailRef}
          placeholder="email"
          //   defaultValue={currentUser.email}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          ref={passwordRef}
          placeholder="Include to change password"
        />
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input
          id="confirmPassword"
          type="password"
          ref={confirmPasswordRef}
          placeholder="Include to change password"
        />
        {error ? (
          <div className="bg-red-200 p-1 mb-2">
            <p className="text-center text-red-600 mb-1 font-semibold">
              {error}
            </p>
          </div>
        ) : null}
        <FormButton disabled={loading} type="submit">
          Update
        </FormButton>
      </Form>
      <p>
        <span
          className="underline text-blue-700 cursor-pointer"
          onClick={() => router.push('/profile')}
        >
          Cancel
        </span>
      </p>
    </>
  );
}

export default UpdateEmailPassword;
