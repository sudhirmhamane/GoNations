import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="w-20 h-20 border-4 border-yellow-400 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
