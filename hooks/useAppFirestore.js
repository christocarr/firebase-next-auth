import { useState, useEffect } from 'react';
import { appFirestore } from '../firebase';

function useAppFirestore(collection) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribe = appFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsubscribe();
  }, [collection]);

  return docs;
}

export default useAppFirestore;
