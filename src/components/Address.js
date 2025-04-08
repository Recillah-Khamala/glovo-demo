import React, { useState, useEffect } from "react";
import textLogo from "../assets/glovo-text-logo.svg";
import balloonLogo from "../assets/glovo-balloon-logo.svg";
import Login from "./Login";

// Logo Component
const Logo = () => (
  <div>
    <a href="/" className="flex hover:opacity-80 transition-opacity">
      <div className="flex items-center">
        <img src={textLogo} alt="Glovo" className="hidden md:block h-8" />
        <img src={balloonLogo} alt="Glovo" className="block md:hidden h-8" />
      </div>
    </a>
  </div>
);

// Login Button Component
const LoginButton = ({ onClick }) => (
  <div>
    <button
      type="button"
      aria-label="Login"
      onClick={onClick}
      className="flex items-center justify-center bg-[#00A082FF] hover:bg-[#00846BFF] active:bg-[#007B62] text-white transition-colors duration-200 rounded-full px-3 md:px-4 py-1.5 md:py-2 focus:outline-none focus:ring-2 focus:ring-[#00A082] focus:ring-offset-2"
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
);

// Header Component
const Header = ({ onLoginClick }) => {
  return (
    <header className="bg-[#FFC244FF] fixed w-full z-[100]">
      <div className="mx-auto flex justify-between items-center box-border w-full max-w-[calc(1124px+15%)] py-2 md:py-4 px-4 md:px-[7.5%]">
        <Logo />
        <LoginButton onClick={onLoginClick} />
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
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200;
      setShowScrollButton(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  if (showLogin) {
    return <Login onBack={() => setShowLogin(false)} />;
  }

  return (
    <>
      <Header onLoginClick={handleLoginClick} />
      <div className="relative mb-0">
        <div
          data-test-id="address-container-section"
          className="relative flex flex-col items-center bg-[#FFC244FF] pt-10 mb-[123px]"
        >
          <div className="container mx-auto px-20 pt-6">
            <div className="flex flex-col md:flex-row md:items-center max-w-7xl mx-auto">
              <div
                data-test-id="address-animation"
                className="relative mb-6 md:mb-0 md:w-1/2"
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
                    width="530"
                    height="475"
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
                  width="530"
                  height="475"
                  className="rounded-lg w-full max-w-[530px] mx-auto"
                >
                  <source
                    src="https://glovoapp.com/images/landing/address-container-animation.webm"
                    preload="auto"
                    type="video/webm"
                  />
                </video>
              </div>

              <div className="md:w-1/2 max-w-2xl md:pl-8">
                <h1 className="text-3xl md:text-6xl font-bold text-gray-900 my-8">
                  Food delivery and more
                </h1>
                <p className="hidden md:block text-lg md:text-xl text-gray-900 font-bold mb-6">
                  Groceries, shops, pharmacies, anything!
                </p>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div
                    data-test-id="address-input-container"
                    className="bg-white rounded-lg p-3 flex items-center justify-between w-full max-w-lg"
                  >
                    <div className="flex items-center gap-2 flex-1">
                      <div className="w-6 h-6 text-[#1C1C1CFF] flex-shrink-0">
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
                        className="w-full pl-2 border-none outline-none font-lg text-lg"
                      />
                    </div>
                    <div className="w-6 h-6 block md:hidden flex-shrink-0">
                      <img
                        src="https://glovoapp.com/images/svg/arrowForward.svg"
                        alt="Forward arrow"
                      />
                    </div>
                  </div>

                  <div className="bg-[#D5F6EFFF] rounded-full p-3 flex items-center gap-2 text-gray-900 cursor-pointer hover:text-gray-700 whitespace-nowrap">
                    <img
                      src="https://glovoapp.com/images/svg/locationArrow.svg"
                      className="w-5 h-5"
                      alt="Location arrow"
                    />
                    <span className="text-lg font-medium">
                      Use current location
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          {/* Wave images */}
          <img
            src="https://glovoapp.com/images/waves/address-jumbotron-wave-desktop.svg"
            alt="Wave shape"
            className="absolute w-full bottom-[50px] left-0 h-[74px] hidden md:block"
          />
          <img
            src="https://glovoapp.com/images/waves/address-jumbotron-wave-mobile.svg"
            alt="Wave shape"
            className="absolute bottom-[30px] left-0 w-full h-auto md:hidden block"
          />
        </div>

        {/* Only show scroll button if login is not shown */}
        {!showLogin && showScrollButton && <ScrollToTopButton />}
      </div>
    </>
  );
};

export default Address;