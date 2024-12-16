import React from 'react';
import { Link } from 'react-router-dom';

const AuthLanding = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to Glovo Downtown
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Choose how you'd like to continue
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <Link
            to="/login"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#00A082] hover:bg-[#008068] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A082]"
          >
            Sign in to your account
          </Link>
          <Link
            to="/register"
            className="w-full flex justify-center py-3 px-4 border border-[#00A082] rounded-md shadow-sm text-sm font-medium text-[#00A082] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A082]"
          >
            Create new account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthLanding; 