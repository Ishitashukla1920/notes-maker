import React from 'react';

const EmptyCard = ({ imgSrc, message }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
<img src={imgSrc} alt='no notes' className='w-60'/>  
   <p className="text-gray-500 text-lg">{message || "No items to display."}</p>
    </div>
  );
};

export default EmptyCard;
