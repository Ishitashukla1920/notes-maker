import React, { useEffect } from 'react';
import { LuCheck } from 'react-icons/lu';
import { MdDeleteOutline } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai'; // Added close icon

const Toast = ({ isShown, message, type, onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed top-20 right-6 transition-all duration-400 ease-in-out ${
        isShown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div
        className={`min-w-[200px] bg-white border shadow-2xl rounded-md relative overflow-hidden`}
      >
        <div
          className={`absolute left-0 top-0 h-full w-[5px] ${
            type === 'delete' ? 'bg-red-500' : 'bg-green-500'
          }`}
        ></div>
        <div className="flex items-center gap-3 py-2 px-4">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              type === 'delete' ? 'bg-red-50' : 'bg-green-50'
            }`}
          >
            {type === 'delete' ? (
              <MdDeleteOutline className="text-xl text-red-500" />
            ) : (
              <LuCheck className="text-xl text-green-500" />
            )}
          </div>
          <p className="text-sm text-slate-800 flex-grow">{message}</p>
          {/* Close Button */}
          <button onClick={onClose} className="text-gray-500">
            <AiOutlineClose className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
