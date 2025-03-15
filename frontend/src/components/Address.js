import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import textLogo from "../assets/glovo-text-logo.svg";
import balloonLogo from "../assets/glovo-balloon-logo.svg";

// Header Components
const Header = () => {
  const { toggleLoginModal } = useAuth();

  return (
    <header className="bg-[#FFC244FF] fixed w-full z-50">
      <div className="mx-auto flex justify-between items-center box-border w-full max-w-[calc(1124px+15%)] py-2 md:py-4 px-4 md:px-[7.5%]">
        {/* Logo Section */}
        <div>
          <a href="/" className="flex hover:opacity-80 transition-opacity">
            <div className="flex items-center">
              <img src={textLogo} alt="Glovo" className="hidden md:block h-8" />
              <img
                src={balloonLogo}
                alt="Glovo"
                className="block md:hidden h-8"
              />
            </div>
          </a>
        </div>
        {/* Login Button */}
        <div>
          <button
            type="button"
            aria-label="Login"
            onClick={toggleLoginModal}
            className="flex items-center justify-center bg-[#00A082FF] hover:bg-[#008F72] active:bg-[#007B62] text-white transition-colors duration-200 rounded-full px-3 md:px-4 py-1.5 md:py-2 focus:outline-none focus:ring-2 focus:ring-[#00A082] focus:ring-offset-2"
          >
            <div className="flex items-center px-1 md:px-2 py-0.5">
              <img
                src="https://glovoapp.com/images/svg/login.svg"
                alt=""
                aria-hidden="true"
                className="w-3 h-3 md:w-4 md:h-4"
              />
              <span className="pl-1 md:pl-2 font-bold text-white text-sm md:text-[15px]">
                Login
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

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

const Address = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { isLoginModalOpen } = useAuth();

  useEffect(() => {
    // Only add scroll listener if login modal is closed
    if (!isLoginModalOpen) {
      const handleScroll = () => {
        const scrollThreshold = 200;
        setShowScrollButton(window.scrollY > scrollThreshold);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // Reset scroll button state when modal is open
      setShowScrollButton(false);
    }
  }, [isLoginModalOpen]); // Add isLoginModalOpen as dependency

  return (
    <>
      {!isLoginModalOpen && <Header />}
      <div className="relative mb-0">
        <div
          data-test-id="address-container-section"
          className="relative flex flex-col items-center bg-[#FFC244FF] pt-2 mt-10 mb-[123px]"
        >
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-start md:gap-6 max-w-7xl pb-5 pt-10 my-0 md:pl-20 lg:pl-24 lg:pr-36">
            <div
              data-test-id="address-animation"
              className="relative mb-6 md:mb-0"
            >
              <picture>
                <source
                  srcSet="https://glovoapp.com/images/landing/video-burger-opt.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://glovoapp.com/images/landing/video-burger-opt.webp"
                  type="image/webp"
                />
                <img
                  src="https://glovoapp.com/images/landing/burger-full-landing.png"
                  width="600"
                  height="538"
                  data-test-id="animation-images"
                  className="hidden"
                  alt="Burger animation fallback"
                />
              </picture>
              <video
                data-test-id="animation-video"
                autoPlay
                loop
                muted
                width="600"
                height="538"
                className="rounded-lg"
              >
                <source
                  src="https://glovoapp.com/images/landing/address-container-animation.webm"
                  preload="auto"
                  type="video/webm"
                />
              </video>
            </div>

            <div className="max-w-2xl md:text-left">
              <h1 className="text-3xl md:text-6xl font-bold text-gray-900 my-8">
                Food delivery and more
              </h1>
              <p className="hidden md:block text-lg md:text-xl text-gray-900 font-bold mb-6">
                Groceries, shops, pharmacies, anything!
              </p>

              <div className="flex flex-row items-center gap-4 bg-white">
                <div
                  data-test-id="address-input-container"
                  className="bg-white rounded-l-lg p-3 flex items-center justify-between w-full max-w-lg"
                >
                  <div className="flex items-center gap-0">
                    <div className="w-6 h-6 text-[#1C1C1CFF]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.125 8.8648C4.125 4.59333 7.6601 1.125 12 1.125C16.3399 1.125 19.875 4.59333 19.875 8.8648C19.875 10.5107 19.5009 12.2592 18.7689 14.06C18.2011 15.4599 17.4128 16.8999 16.4244 18.3481C15.6945 19.4161 14.9171 20.4011 14.1403 21.282C13.6582 21.8288 13.2272 22.2758 13.036 22.4559C12.7553 22.7279 12.3837 22.875 12 22.875C11.614 22.875 11.2393 22.7269 10.966 22.4587C10.7533 22.2557 10.3387 21.8242 9.85811 21.278C9.08129 20.395 8.30417 19.4086 7.57439 18.3395C6.5875 16.8928 5.79879 15.452 5.23027 14.0531C4.4988 12.2512 4.125 10.5056 4.125 8.8648Z"
                          stroke="#292929"
                          strokeWidth="1.5"
                        />
                        <mask
                          id="mask0_3_3292"
                          maskUnits="userSpaceOnUse"
                          x="3"
                          y="0"
                          width="18"
                          height="24"
                          style={{ maskType: "alpha" }}
                        >
                          <path
                            d="M4.125 8.8648C4.125 4.59333 7.6601 1.125 12 1.125C16.3399 1.125 19.875 4.59333 19.875 8.8648C19.875 10.5107 19.5009 12.2592 18.7689 14.06C18.2011 15.4599 17.4128 16.8999 16.4244 18.3481C15.6945 19.4161 14.9171 20.4011 14.1403 21.282C13.6582 21.8288 13.2272 22.2758 13.036 22.4559C12.7553 22.7279 12.3837 22.875 12 22.875C11.614 22.875 11.2393 22.7269 10.966 22.4587C10.7533 22.2557 10.3387 21.8242 9.85811 21.278C9.08129 20.395 8.30417 19.4086 7.57439 18.3395C6.5875 16.8928 5.79879 15.452 5.23027 14.0531C4.4988 12.2512 4.125 10.5056 4.125 8.8648Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="1.5"
                          />
                        </mask>
                        <g mask="url(#mask0_3_3292)">
                          <ellipse
                            cx="12"
                            cy="9.13281"
                            rx="3.75"
                            ry="3.75"
                            stroke="#292929"
                            strokeWidth="1.5"
                          />
                        </g>
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="What's your address?"
                      className="pl-2 border-none outline-none font-lg text-lg"
                    />
                  </div>
                  <div className="w-6 h-6 block md:hidden">
                    <img
                      src="https://glovoapp.com/images/svg/arrowForward.svg"
                      alt="Forward arrow"
                    />
                  </div>
                </div>

                <div className="bg-[#D5F6EFFF] rounded-full p-3 m-2 flex items-center gap-0 text-gray-900 cursor-pointer hover:text-gray-700 h-full w-full">
                  <img
                    src="https://glovoapp.com/images/svg/locationArrow.svg"
                    className="w-5 h-5"
                    alt="Location arrow"
                  />
                  <span className="text-lg font-medium whitespace-nowrap">
                    Use current location
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          {/* Wave image at bottom */}
          <img
            src="https://glovoapp.com/images/waves/address-jumbotron-wave-desktop.svg"
            alt="Wave shape"
            className="absolute w-full bottom-[50px] left-0 h-[74px]"
          />
          <img
            src="https://glovoapp.com/images/waves/address-jumbotron-wave-mobile.svg"
            alt="Wave shape"
            className="absolute bottom-[30px] left-0 w-full h-auto md:hidden block"
          />
        </div>

        {/* Only show scroll button if modal is closed */}
        {!isLoginModalOpen && showScrollButton && <ScrollToTopButton />}
      </div>
    </>
  );
};

export default Address;
