import { useState, useEffect } from 'react';
import { appStorage, appFirestore } from '../firebase';
import { useAuth } from '../context/authContext';

const useAppStorage = (file) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const { currentUser } = useAuth();

  useEffect(() => {
    const storageRef = appStorage.ref();

    const db = appFirestore.collection('images');

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
      async () => {
        const url = await uploadTask.snapshot.ref.getDownloadURL();
        setImageUrl(url);
        db.add({ url: url, user: currentUser.email })
          .then((docRef) => {
            console.log(docRef);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    );
  }, [file]);

  return { uploadProgress, imageUrl, error };
};

export default useAppStorage;
