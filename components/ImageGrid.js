import useAppFirestore from '../hooks/useAppFirestore';
import Image from 'next/image';

function ImageGrid() {
  const docs = useAppFirestore('images');

  console.log(docs);

  return (
    docs &&
    docs.map((doc) => (
      <div key={doc.id}>
        <Image src={doc.url} width="200" height="200" />
      </div>
    ))
  );
}

export default ImageGrid;
