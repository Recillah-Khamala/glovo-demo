import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LoginButton = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleClick = () => {
    if (isAuthenticated) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center bg-[#00A082FF] hover:bg-[#00846BFF] text-white transition-colors duration-200 rounded-full px-3 md:px-4 py-1.5 md:py-2 focus:outline-none focus:ring-2 focus:ring-[#00A082] focus:ring-offset-2"
    >
      <div className="flex items-center px-1 md:px-2 py-0.5">
        <img
          src="https://glovoapp.com/images/svg/login.svg"
          alt=""
          aria-hidden="true"
          className="w-3 h-3 md:w-4 md:h-4"
        />
        <span className="pl-1 md:pl-2 font-bold text-white text-sm md:text-[15px]">
          {isAuthenticated ? user?.first_name || 'Profile' : 'Login'}
        </span>
      </div>
    </button>
  );
};

export default LoginButton; 