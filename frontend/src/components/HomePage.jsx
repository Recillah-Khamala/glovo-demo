import React from "react";
import { useSelector } from "react-redux";

const GlovoLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-8 h-8"
  >
    <path
      fill="#00A082"
      d="M7 10.3574C7 5.19772 11.2683 1 16.5147 1c5.2464 0 9.5146 4.19772 9.485 9.3574 0 1.9531-.5928 3.8479-1.7784 5.4512l-.2372.3498-4.95 6.8796s-.6224.962-1.9266.962h-1.1856c-1.3339 0-1.9267-.962-1.9267-.962l-4.94999-6.8796-.26677-.3498C7.62245 14.2053 7 12.3105 7 10.3574Z"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const HomePage = () => {
  const userName = useSelector((state) => state.login.name);

  const categories = [
    {
      id: 1,
      name: "Food",
      image:
        "https://glovo.dhmedia.io/image/customer-assets-glovo/category_group_icons/a79ace566074e380f98056265cac2c0ae312dbfecb165dea7d7247d406f6305d",
    },
    {
      id: 2,
      name: "Package Delivery",
      image:
        "https://glovo.dhmedia.io/image/customer-assets-glovo/category_group_icons/606bd23a6f58cb7f062bfa8b83054df699404797eeae2bd67f41e7d8885d45e1",
    },
    {
      id: 3,
      name: "Pharmacy & Beauty",
      image:
        "https://glovo.dhmedia.io/image/customer-assets-glovo/category_group_icons/abe0e6d60c9e6e62d73ede9d1eec870dac15283d32b5aeee41045402e466eed3",
    },
    {
      id: 4,
      name: "Shops",
      image:
        "https://glovo.dhmedia.io/image/customer-assets-glovo/category_group_icons/cc38634d7f470f25c61bb209899f12a44032cb0251409b4cd75368da5c881978",
    },
    {
      id: 5,
      name: "Groceries",
      image:
        "https://glovo.dhmedia.io/image/customer-assets-glovo/category_group_icons/c0fd33b415a34052003807189c2a8e5c513b1fcef4be33a79052344abecfcc02",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <GlovoLogo />
              <div className="flex items-center space-x-2">
                <img
                  src="https://glovoapp.com/images/svg/bicycle.svg"
                  alt=""
                  className="w-5 h-5"
                />
                <span className="text-sm">Delivering to</span>
                <span className="font-medium">Belmont Court</span>
                <img
                  src="https://glovoapp.com/images/landing/dropdown-black.svg"
                  alt=""
                  className="w-4 h-4"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50">
                <img
                  src="https://glovoapp.com/images/svg/login-black.svg"
                  alt=""
                  className="w-5 h-5"
                />
                <span>{userName}</span>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="py-4">
            <div className="relative">
              <input
                type="text"
                placeholder="What can we get you?"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#017963] focus:border-transparent"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 hover:scale-105 transition-transform cursor-pointer">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-16 h-16"
                />
              </div>
              <span className="text-center font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
