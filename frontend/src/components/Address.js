import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

// Header Components
const GlovoTextLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 95 32"
    className="hidden md:block h-10 w-[160px]"
  >
    <path
      fill="#00A082"
      d="M0 20.944v-.062C0 14.947 4.527 9.917 10.894 9.917c3.169 0 5.28.758 7.211 2.152.363.273.755.787.755 1.514 0 1-.814 1.848-1.84 1.848-.483 0-.845-.211-1.147-.425-1.358-.998-2.836-1.666-5.13-1.666-3.892 0-6.85 3.424-6.85 7.482v.06c0 4.363 2.867 7.573 7.182 7.573 1.992 0 3.802-.636 5.1-1.605v-3.967H12.01c-.905 0-1.659-.698-1.659-1.606 0-.909.754-1.636 1.66-1.636h5.885c1.055 0 1.87.817 1.87 1.879v5.663c0 1.06-.422 1.818-1.298 2.363-1.811 1.212-4.346 2.302-7.513 2.302C4.345 31.848 0 27.123 0 20.944m23.093-9.905a1.8 1.8 0 0 1 1.81-1.818c1.026 0 1.842.818 1.842 1.818v18.78c0 1.03-.816 1.817-1.841 1.817a1.8 1.8 0 0 1-1.811-1.817v-18.78zm19.817 12.54v-.06c0-2.818-2.021-5.15-4.888-5.15-2.927 0-4.798 2.302-4.798 5.089v.06c0 2.787 2.022 5.119 4.858 5.119 2.957 0 4.828-2.302 4.828-5.058m-13.337 0v-.06c0-4.575 3.62-8.361 8.51-8.361 4.888 0 8.479 3.725 8.479 8.3v.06c0 4.544-3.621 8.33-8.54 8.33-4.86 0-8.449-3.725-8.449-8.269m26.105 8.209h-.18c-.997 0-1.661-.637-2.083-1.607l-5.31-12.206c-.092-.273-.212-.575-.212-.908 0-.91.815-1.757 1.81-1.757.996 0 1.51.574 1.811 1.333l4.104 10.6 4.164-10.66c.271-.636.755-1.273 1.72-1.273.996 0 1.78.757 1.78 1.757 0 .333-.12.697-.21.878L57.76 30.18c-.423.94-1.087 1.607-2.083 1.607m22.274-8.208v-.06c0-2.818-2.02-5.15-4.888-5.15-2.927 0-4.798 2.302-4.798 5.089v.06c0 2.787 2.022 5.119 4.86 5.119 2.955 0 4.826-2.302 4.826-5.058m-13.337 0v-.06c0-4.575 3.621-8.361 8.51-8.361 4.888 0 8.479 3.725 8.479 8.3v.06c0 4.544-3.62 8.33-8.54 8.33-4.858 0-8.449-3.725-8.449-8.269"
      className="glovo-logo__text--green"
      strokeWidth="1.5"
    />
  </svg>
);

const GlovoMobileBalloonLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 95 32"
    className="block md:hidden h-8 w-[160px]"
  >
    <path
      fill="#00A082"
      d="m90.661 9.961-.2.28-2.751 3.897-2.748-3.89-.201-.282a3.648 3.648 0 0 1 2.949-5.781 3.65 3.65 0 0 1 2.95 5.776M87.711.639c-3.956 0-7.171 3.23-7.171 7.199 0 1.511.468 2.962 1.351 4.195l.19.266 3.735 5.288s.455.747 1.448.747h.892c.995 0 1.448-.747 1.448-.747l3.732-5.289.19-.266a7.155 7.155 0 0 0 1.352-4.195c0-3.969-3.217-7.198-7.17-7.198M85.692 21.58v-.014c0-1.076.851-1.966 2-1.966 1.15 0 1.994.876 1.994 1.952v.014c0 1.067-.852 1.957-2.008 1.957-1.14 0-1.986-.875-1.986-1.943"
      className="glovo-logo__balloon--green"
      strokeWidth="1.5"
    />
  </svg>
);

const Header = () => {
  const { toggleLoginModal } = useAuth();

  return (
    <header className="bg-[#FFC244FF] fixed w-full z-50">
      <div className="mx-auto flex justify-between items-center box-border w-full max-w-[calc(1124px+15%)] py- md:py-4 px-4 md:px-[7.5%]">
        {/* Logo Section */}
        <div>
          <a href="/" className="flex hover:opacity-80 transition-opacity">
            <div className="flex items-center">
              <div className="hidden md:block">
                <GlovoTextLogo />
              </div>
              <div className="block md:hidden">
                <GlovoMobileBalloonLogo />
              </div>
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
    const handleScroll = () => {
      const scrollThreshold = 200;
      setShowScrollButton(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        {/* Scroll to top button */}
        {showScrollButton && <ScrollToTopButton />}
      </div>
    </>
  );
};

export default Address;
