import React from "react";
import { Menu, ShoppingBag, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#FFC244] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-900" />
            <span className="ml-3 text-xl font-bold text-gray-900">
              Glovo Downtown
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <ShoppingBag className="h-6 w-6 text-gray-900" />
            <User className="h-6 w-6 text-gray-900" />
          </div>
        </div>
      </div>
    </header>
  );
}

