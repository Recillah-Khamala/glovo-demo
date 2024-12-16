import React from "react";
import { Menu, ShoppingBag, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const isLoggedIn = !!localStorage.getItem('token');
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  // Don't show the full header on login/register pages
  if (isAuthPage) {
    return (
      <header className="bg-[#FFC244] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">
                Glovo Downtown
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-[#FFC244] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-900" />
            <Link to="/" className="ml-3 text-xl font-bold text-gray-900">
              Glovo Downtown
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <ShoppingBag className="h-6 w-6 text-gray-900" />
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-gray-900 hover:text-gray-700"
              >
                Logout
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-900 hover:text-gray-700"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-gray-900 hover:text-gray-700"
                >
                  Register
                </Link>
              </div>
            )}
            <User className="h-6 w-6 text-gray-900" />
          </div>
        </div>
      </div>
    </header>
  );
}

