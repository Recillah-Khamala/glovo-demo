import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import textLogo from "../assets/glovo-text-logo.svg";
import balloonLogo from "../assets/glovo-balloon-logo.svg";
import Login from "./Login";
import { fetchTopRestaurants } from '../store/restaurantsSlice';

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

const Address = ({ address }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const dispatch = useDispatch();
  const { topRestaurants, status, error } = useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(fetchTopRestaurants());
  }, [dispatch]);

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
          <div className="container mx-auto pt-6 gap-6">  
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

              <div className="md:w-1/2 max-w-2xl md:pl-8 px-4 md:px-0">
                <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
                  Food delivery and more
                </h1>
                <p className="text-2xl text-gray-900 font-bold mb-8">
                  Groceries, shops, pharmacies, anything!
                </p>

                <div className="flex items-center gap-2 w-full">
                  <div className="flex-1 bg-white rounded-lg overflow-hidden">
                    <div className="flex items-center h-14">
                      <div className="px-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.125 8.8648C4.125 4.59333 7.6601 1.125 12 1.125C16.3399 1.125 19.875 4.59333 19.875 8.8648C19.875 10.5107 19.5009 12.2592 18.7689 14.06C18.2011 15.4599 17.4128 16.8999 16.4244 18.3481C15.6945 19.4161 14.9171 20.4011 14.1403 21.282C13.6582 21.8288 13.2272 22.2758 13.036 22.4559C12.7553 22.7279 12.3837 22.875 12 22.875C11.614 22.875 11.2393 22.7269 10.966 22.4587C10.7533 22.2557 10.3387 21.8242 9.85811 21.278C9.08129 20.395 8.30417 19.4086 7.57439 18.3395C6.5875 16.8928 5.79879 15.452 5.23027 14.0531C4.4988 12.2512 4.125 10.5056 4.125 8.8648Z" stroke="#292929" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder={address ? `${address.street}, ${address.city}` : "What's your address?"}
                        className="w-full h-full border-none outline-none text-lg"
                        readOnly
                      />
                    </div>
                  </div>

                  <button className="flex items-center gap-2 bg-[#D5F6EFFF] h-14 px-4 rounded-full hover:bg-opacity-90 transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.6 5.6M12 2L8.4 5.6M12 2V16M21 12L17.4 15.6M21 12L17.4 8.4M21 12H7M12 22L8.4 18.4M12 22L15.6 18.4M12 22V8M3 12L6.6 8.4M3 12L6.6 15.6M3 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium whitespace-nowrap">Use current location</span>
                  </button>
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

        {/* Top restaurants section */}
        <div className="w-full">
          <h2 
            data-test-id="top-partners-title" 
            className="box-border text-[40px] font-bold leading-[1.2] mx-auto mt-8 w-full text-center px-[7.5%] md:px-[5%] text-gray-900"
          >
            <span className="bg-white px-2 pt-3 rounded-md">
              <span>Top restaurants and more</span>
            </span>
            <span> in Glovo</span>
          </h2>

          {status === 'loading' && (
            <div className="text-center py-8">Loading restaurants...</div>
          )}
          
          {status === 'failed' && (
            <div className="text-center py-8 text-red-500">Error: {error}</div>
          )}
          
          {status === 'succeeded' && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-[7.5%] md:px-[5%] mt-8">
              {topRestaurants.map((restaurant) => (
                <div key={restaurant.id} className="flex flex-col items-center">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <span className="mt-2 text-center font-medium">{restaurant.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Only show scroll button if login is not shown */}
        {!showLogin && showScrollButton && <ScrollToTopButton />}
      </div>
    </>
  );
};

export default Address;