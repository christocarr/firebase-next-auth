import { useState, useRef } from 'react';
import Link from 'next/link';
import { Form, Label, Input, FormButton } from '../Form/';
import Progress from './Progress';

function ImageUpload() {
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileRef = useRef();

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
      <Label>Image file</Label>
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
      <Link href="">Cancel</Link>
    </Form>
  );
}

export default ImageUpload;
