import useAppFirestore from '../hooks/useAppFirestore';
import { Context } from '../context/Context';

import Image from 'next/image';

function ImageGrid({ images }) {
  const docs = useAppFirestore('images');

  return (
    <div className="flex flex-wrap justify-evenly w-full">
      {images &&
        images.map((image) => (
          <div
            key={image.id}
            className="flex flex-col justify-center relative w-1/4 h-48"
          >
            <Image
              src={image.url}
              layout="fill"
              objectFit="cover"
              alt={`uploaded by ${image.user}`}
            />
          </div>
        ))}
    </div>
  );
}

export default ImageGrid;
