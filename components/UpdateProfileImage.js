import { useRef, useState } from 'react';
import { Form, Input, FormButton } from './Form';
import { Context } from '../context/Context';

function UpdateProfileImage() {
  const [error, setError] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const { currentUser, updateProfileImage } = Context();

  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const handleChange = (ev) => {
    setError('');
    const file = ev.target.files[0];
    if (file && types.includes(file.type)) {
      setImageFile(file);
    } else {
      setImageFile(null);
      setError('File type is invalid. Please choose a png or jpg file.');
    }
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      setError('');
      await updateProfileImage({ profilePhoto: imageFile.name });
    } catch (err) {
      console.error(err);
      setError('Could not update your profile image. Try again.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-2 text-center">
        Change Your Profile Image
      </h2>
      <Input type="file" onChange={handleChange} />
      {error ? (
        <div className="bg-red-200 p-1 mb-2">
          <p className="text-center text-red-600 mb-1 font-semibold">{error}</p>
        </div>
      ) : null}
      <FormButton type="submit">Update</FormButton>
    </Form>
  );
}

export default UpdateProfileImage;
