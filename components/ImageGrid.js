import useAppFirestore from '../hooks/useAppFirestore';
import Image from 'next/image';

function ImageGrid() {
  const docs = useAppFirestore('images');

  return (
    <div className="flex flex-wrap justify-evenly w-full">
      {docs &&
        docs.map((doc) => (
          <div key={doc.id} className="flex flex-col justify-center">
            <Image
              src={doc.url}
              width="200"
              height="200"
              alt={`uploaded by ${doc.user}`}
            />
            <p>{doc.user}</p>
          </div>
        ))}
    </div>
  );
}

export default ImageGrid;
