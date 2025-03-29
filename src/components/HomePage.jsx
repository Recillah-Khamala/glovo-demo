import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/authActions";
import balloonLogo from "../assets/glovo-balloon-logo.svg";
import { wrappedSetAddress } from "../store/loginSlice";

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

const AddressModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'ADDRESS_SELECTED') {
        const selectedAddress = {
          street: event.data.address.street,
          city: event.data.address.city
        };
        dispatch(wrappedSetAddress(selectedAddress));
        onClose();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [dispatch, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
      data-test-id="modal-window"
    >
      <div className="relative bg-white rounded-lg w-[90%] max-w-[800px] h-[90vh]">
        <div className="absolute top-4 right-4 z-10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer transition-opacity hover:opacity-80"
            data-test-id="base-modal__close"
            onClick={onClose}
          >
            <circle opacity="0.3" cx="12" cy="12" r="12" fill="black" />
            <path
              d="M16.6628 8.70505C17.0522 8.31339 17.0503 7.68023 16.6587 7.29084C16.267 6.90145 15.6338 6.90329 15.2445 7.29495L16.6628 8.70505ZM12 11.9767L11.2908 11.2716C10.9031 11.6617 10.9031 12.2917 11.2908 12.6817L12 11.9767ZM15.2908 16.705C15.6802 17.0967 16.3134 17.0985 16.705 16.7092C17.0967 16.3198 17.0985 15.6866 16.7092 15.295L15.2908 16.705ZM8.75554 7.29495C8.36615 6.90329 7.73299 6.90145 7.34133 7.29084C6.94967 7.68023 6.94783 8.31339 7.33722 8.70505L8.75554 7.29495ZM12 11.9767L12.7092 12.6817C13.0969 12.2917 13.0969 11.6617 12.7092 11.2716L12 11.9767ZM7.29084 15.295C6.90145 15.6866 6.90329 16.3198 7.29495 16.7092C7.68661 17.0985 8.31977 17.0967 8.70916 16.705L7.29084 15.295ZM15.2445 7.29495L11.2908 11.2716L12.7092 12.6817L16.6628 8.70505L15.2445 7.29495ZM11.2908 12.6817L15.2908 16.705L16.7092 15.295L12.7092 11.2716L11.2908 12.6817ZM7.33722 8.70505L11.2908 12.6817L12.7092 11.2716L8.75554 7.29495L7.33722 8.70505ZM11.2908 11.2716L7.29084 15.295L8.70916 16.705L12.7092 12.6817L11.2908 11.2716Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="w-full h-full rounded-lg overflow-hidden">
          <iframe
            title="Address Book Desktop"
            src="https://glovoapp.com/en/internal/address-book-desktop"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const address = useSelector((state) => state.login.address);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const handleAuthClick = () => {
    if (isAuthenticated) {
      dispatch(logout());
    } else {
      navigate('/login');
    }
  };

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
        <div className="max-w-7xl mx-auto px-0">
          <div className="flex items-center justify-between py-4 px-24">
            <div className="flex items-center">
              <img src={balloonLogo} alt="Glovo" className="block h-10" />
            </div>
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setIsAddressModalOpen(true)}
            >
              <img
                src="https://glovoapp.com/images/svg/bicycle.svg"
                alt=""
                className="w-5 h-5"
              />
              <span className="text-base font-extrabold">Delivering to</span>
              <span className="font-bold text-base text-[#00846BFF]">
                {address ? address.street : "Add your address"}
              </span>
              <img
                src="https://glovoapp.com/images/landing/dropdown-black.svg"
                alt=""
                className="w-4 h-4"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleAuthClick}
                className="flex items-center space-x-2 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 bg-[#00846BFF]"
              >
                <img
                  src="https://glovoapp.com/images/svg/login-black.svg"
                  alt=""
                  className="w-5 h-5"
                />
                <span>{isAuthenticated ? user.name : "Login"}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative">
        <main className="relative bg-[#FFC244FF] px-0 pt-10">
          <div className="max-w-7xl mx-auto">
            <div className="px-56">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 my-10">
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
        <div className="relative bg-[#FFC244FF] curved-bottom h-0">
          {/* Empty div for curved bottom */}
        </div>
      </div>

      {/* Address Modal */}
      <AddressModal
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
      />

      {/* Scroll to top button */}
      {showScrollButton && <ScrollToTopButton />}
    </div>
  );
};

export default HomePage;
