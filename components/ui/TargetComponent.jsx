'use client'
import { useState } from 'react';

const TargetComponent = ({ title }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-48 h-36 bg-black text-white rounded-md p-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className={`absolute top-4 left-4 ${hovered ? 'block' : 'hidden'}`}>
        {title}
      </h3>
      <div className={`absolute bottom-4 left-4 ${hovered ? 'flex' : 'hidden'}`}>
        <button className="px-3 py-1 bg-green-500 text-white rounded-md mr-2">
          Button 1
        </button>
        <button className="px-3 py-1 bg-green-500 text-white rounded-md">
          Button 2
        </button>
      </div>
    </div>
  );
};

export default TargetComponent;
