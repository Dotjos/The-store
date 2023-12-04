import { useEffect, useRef } from "react";

function Modal({ isOpen, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isOpen]);

  return (
    <dialog ref={modalRef} className="p-3 rounded-xl">
      {children}
    </dialog>
  );
}

export default Modal;
