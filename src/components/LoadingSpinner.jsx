import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg flex items-center space-x-3">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#017963]"></div>
        <span className="text-gray-700">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner; 