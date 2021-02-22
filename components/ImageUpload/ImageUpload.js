import { useState, useRef } from 'react';
import Link from 'next/link';
import { Form, Label, Input, FormButton } from '../Form/';
import Progress from './Progress';
import { Context } from '../../context/Context';

function ImageUpload() {
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileRef = useRef();

  const { toggleModal } = Context();

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

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (imageFile) {
      setSelectedFile(imageFile);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {selectedFile && (
        <Progress file={selectedFile} setFile={setSelectedFile} />
      )}
      <Input
        type="file"
        onChange={handleChange}
        ref={fileRef}
        defaultValue={null}
      />
      {error ? (
        <div className="bg-red-200 p-1 mb-2">
          <p className="text-center text-red-600 mb-1 font-semibold">{error}</p>
        </div>
      ) : null}
      <FormButton type="submit">Upload</FormButton>
      <button className="text-blue-500" onClick={toggleModal}>
        Cancel
      </button>
    </Form>
  );
}

export default ImageUpload;
