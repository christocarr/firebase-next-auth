import ImageUpload from './ImageUpload/ImageUpload';
function Modal(props) {
  return (
    <div className="absolute top-0 left-0 z-50 flex flex-col justify-center items-center w-screen h-screen bg-gray-400 bg-opacity-50">
      <ImageUpload />
    </div>
  );
}

export default Modal;
