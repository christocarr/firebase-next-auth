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
            className="flex flex-col justify-center relative w-full h-52 sm:w-2/5 md:w-3/5 sm:h-72 md:h-80"
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
