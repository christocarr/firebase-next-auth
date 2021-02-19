import { useState, useEffect } from 'react';
import { appStorage } from '../firebase';

const useAppStorage = (file) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const storageRef = appStorage.ref();

    const uploadTask = storageRef.child(file.name).put(file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        setError(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          setImageUrl(url);
        });
      }
    );
  }, [file]);

  return { uploadProgress, imageUrl, error };
};

export default useAppStorage;
