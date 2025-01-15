import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string; // Optional title for the modal
  className?: string; // Optional className for styling
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, className }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div
        className={`relative w-full max-w-md rounded-lg bg-white p-4 shadow-lg ${className || ''}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside
      >
        <button className="absolute right-2 top-2 text-4xl text-gray-500 hover:text-gray-700" onClick={onClose}>
          &times;
        </button>
        {title && <h2 className="mb-4 text-xl font-bold">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};
