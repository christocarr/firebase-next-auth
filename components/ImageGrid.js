import useAppFirestore from '../hooks/useAppFirestore';
import { Context } from '../context/Context';

import Image from 'next/image';

function ImageGrid({ images }) {
  const docs = useAppFirestore('images');

  return (
    <div className="flex flex-wrap justify-evenly w-full">
      {images &&
        images.map((image) => (
          <div key={image.id} className="flex flex-col justify-center">
            <Image
              src={image.url}
              width="200"
              height="200"
              alt={`uploaded by ${image.user}`}
            />
            <p>{image.user}</p>
          </div>
        ))}
    </div>
  );
}

export default ImageGrid;
