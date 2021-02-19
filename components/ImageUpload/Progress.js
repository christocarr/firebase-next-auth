import { useEffect } from 'react';
import useAppStorage from '../../hooks/useAppStorage';

function Progress({ file, setFile }) {
  const { imageUrl, uploadProgress } = useAppStorage(file);

  useEffect(() => {
    if (imageUrl) {
      setFile(null);
    }
  }, [imageUrl]);

  return (
    <div className="w-full">
      <div
        className="h-1 bg-blue-500 rounded"
        style={{ width: `${uploadProgress}%` }}
      ></div>
    </div>
  );
}

export default Progress;
