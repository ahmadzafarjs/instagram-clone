import { useState } from "react";
import PostPreview from "./PostPreview";
import { RxCross1 } from "react-icons/rx";

function Modal() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(!openModal);
  return (
    <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full z-200 backdrop-opacity-80 backdrop-blur-[30px]">
      <button onClick={handleOpenModal}>
        <RxCross1 />
      </button>
      <PostPreview />
    </div>
  );
}

export default Modal;
