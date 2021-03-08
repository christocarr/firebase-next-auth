import { useEffect } from 'react';
import useAppStorage from '../../hooks/useAppStorage';
import { Context } from '../../context/Context';

function Progress({ file, setFile }) {
  const { imageUrl, uploadProgress } = useAppStorage(file);
  const { toggleModal } = Context();

  useEffect(() => {
    if (imageUrl) {
      setFile(null);
    }
    if (uploadProgress === 100) {
      setTimeout(() => {
        toggleModal();
      }, 1500);
    }
  }, [imageUrl, uploadProgress]);

  return (
    <div className="w-full mb-2">
      <div
        className="h-1 bg-blue-500 rounded"
        style={{ width: `${uploadProgress}%` }}
      ></div>
    </div>
  );
}

export default Progress;
