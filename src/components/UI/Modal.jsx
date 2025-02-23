import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  return createPortal(
    <dialog
      autoFocus={false}
      ref={dialogRef}
      className="fixed max-w-[27.5rem]  mx-auto inset-[var(--modal-inset)] border-3 rounded-md backdrop:bg-black backdrop:opacity-50  max-h-[60vh] "
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
