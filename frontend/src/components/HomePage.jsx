import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const GlovoLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 95 32"
    className="block md:hidden h-6 w-[135px]"
  >
    <path
      fill="#00A082"
      d="M0 20.944v-.062C0 14.947 4.527 9.917 10.894 9.917c3.169 0 5.28.758 7.211 2.152.363.273.755.787.755 1.514 0 1-.814 1.848-1.84 1.848-.483 0-.845-.211-1.147-.425-1.358-.998-2.836-1.666-5.13-1.666-3.892 0-6.85 3.424-6.85 7.482v.06c0 4.363 2.867 7.573 7.182 7.573 1.992 0 3.802-.636 5.1-1.605v-3.967H12.01c-.905 0-1.659-.698-1.659-1.606 0-.909.754-1.636 1.66-1.636h5.885c1.055 0 1.87.817 1.87 1.879v5.663c0 1.06-.422 1.818-1.298 2.363-1.811 1.212-4.346 2.302-7.513 2.302C4.345 31.848 0 27.123 0 20.944m23.093-9.905a1.8 1.8 0 0 1 1.81-1.818c1.026 0 1.842.818 1.842 1.818v18.78c0 1.03-.816 1.817-1.841 1.817a1.8 1.8 0 0 1-1.811-1.817v-18.78zm19.817 12.54v-.06c0-2.818-2.021-5.15-4.888-5.15-2.927 0-4.798 2.302-4.798 5.089v.06c0 2.787 2.022 5.119 4.858 5.119 2.957 0 4.828-2.302 4.828-5.058m-13.337 0v-.06c0-4.575 3.62-8.361 8.51-8.361 4.888 0 8.479 3.725 8.479 8.3v.06c0 4.544-3.621 8.33-8.54 8.33-4.86 0-8.449-3.725-8.449-8.269m26.105 8.209h-.18c-.997 0-1.661-.637-2.083-1.607l-5.31-12.206c-.092-.273-.212-.575-.212-.908 0-.91.815-1.757 1.81-1.757.996 0 1.51.574 1.811 1.333l4.104 10.6 4.164-10.66c.271-.636.755-1.273 1.72-1.273.996 0 1.78.757 1.78 1.757 0 .333-.12.697-.21.878L57.76 30.18c-.423.94-1.087 1.607-2.083 1.607m22.274-8.208v-.06c0-2.818-2.02-5.15-4.888-5.15-2.927 0-4.798 2.302-4.798 5.089v.06c0 2.787 2.022 5.119 4.86 5.119 2.955 0 4.826-2.302 4.826-5.058m-13.337 0v-.06c0-4.575 3.621-8.361 8.51-8.361 4.888 0 8.479 3.725 8.479 8.3v.06c0 4.544-3.62 8.33-8.54 8.33-4.858 0-8.449-3.725-8.449-8.269"
      className="glovo-logo__text--green"
    />
    <path
      fill="#00A082"
      d="m90.661 9.961-.2.28-2.751 3.897-2.748-3.89-.201-.282a3.648 3.648 0 0 1 2.949-5.781 3.65 3.65 0 0 1 2.95 5.776M87.711.639c-3.956 0-7.171 3.23-7.171 7.199 0 1.511.468 2.962 1.351 4.195l.19.266 3.735 5.288s.455.747 1.448.747h.892c.995 0 1.448-.747 1.448-.747l3.732-5.289.19-.266a7.155 7.155 0 0 0 1.352-4.195c0-3.969-3.217-7.198-7.17-7.198M85.692 21.58v-.014c0-1.076.851-1.966 2-1.966 1.15 0 1.994.876 1.994 1.952v.014c0 1.067-.852 1.957-2.008 1.957-1.14 0-1.986-.875-1.986-1.943"
      className="glovo-logo__balloon--green"
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
      {/* Header */}
      <header className="bg-yellow-400 sticky top-0 z-40 shadow-md">
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
            <div
              key={category.id}
              className="flex flex-col items-center"
              onClick={() => {
                // Smooth scroll to content section when category is clicked
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
              <span className="text-center font-medium">{category.name}</span>
            </div>
          ))}
        </div>

        {/* Example content sections for each category */}
        {categories.map((category) => (
          <div
            key={category.id}
            id={`section-${category.id}`}
            className="mt-16 pb-16 border-b last:border-b-0"
          >
            <h2 className="text-2xl font-bold mb-8">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example placeholder content */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gray-200 w-full h-40 rounded-lg mb-4"></div>
                  <h3 className="font-medium mb-2">Example Item {item}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* Scroll to top button */}
      {showScrollButton && <ScrollToTopButton />}
    </div>
  );
};

export default HomePage;
