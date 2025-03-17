import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import balloonLogo from "../assets/glovo-balloon-logo.svg";

const styles = `
  .curved-bottom:before {
    content: '';
    position: absolute;
    bottom: -50px;
    left: 0;
    width: 100%;
    height: 88px;
    background-color: white;
    border-top-left-radius: 43%;
    border-top-right-radius: 43%;
  }
`;

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

const ScrollToTopButton = () => (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-8 right-8 bg-[#017963] text-white p-3 rounded-full shadow-lg hover:bg-[#00664E] transition-all transform hover:scale-110 z-50"
    aria-label="Scroll to top"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  </button>
);

const HomePage = () => {
  const userName = useSelector((state) => state.login.name);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200;
      setShowScrollButton(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <style>{styles}</style>
      {/* Header */}
      <header className="bg-[#FFC244FF] sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <img src={balloonLogo} alt="Glovo" className="block h-10" />
            </div>
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
        </div>
      </header>

      {/* Main Content */}
      <div className="relative">
        <main className="relative bg-[#FFC244FF] px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex flex-col items-center"
                  onClick={() => {
                    const element = document.getElementById(
                      `section-${category.id}`
                    );
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 hover:scale-105 transition-transform cursor-pointer">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-16 h-16"
                    />
                  </div>
                  <span className="text-center font-medium">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="py-4">
                <div className="relative max-w-[700px] mx-auto">
                  <input
                    type="text"
                    placeholder="What can we get you?"
                    className="w-full pl-12 pr-4 py-2 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#017963] focus:border-transparent text-sm"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <SearchIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Curved bottom section */}
        <div className="relative bg-[#FFC244FF] curved-bottom h-24">
          {/* Empty div for curved bottom */}
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollButton && <ScrollToTopButton />}
    </div>
  );
};

export default HomePage;
