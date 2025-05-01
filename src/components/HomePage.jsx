import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import balloonLogo from "../assets/glovo-balloon-logo.svg";
import { wrappedSetAddress } from "../store/loginSlice";
import { fetchCategories } from "../store/categoriesSlice";
import { fetchTopRestaurants } from '../store/restaurantsSlice';
import { useAuth } from '../context/AuthContext';
import CategoryList from './CategoryList';
import RestaurantList from './RestaurantList';
import AddressModal from './AddressModal';
import LoginButton from './LoginButton';

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

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const { categories, status: categoriesStatus } = useSelector((state) => state.categories);
  const address = useSelector((state) => state.auth?.address);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchTopRestaurants());
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                {address ? `${address.street}, ${address.city}` : "Add your address"}
              </span>
              <img
                src="https://glovoapp.com/images/landing/dropdown-black.svg"
                alt=""
                className="w-4 h-4"
              />
            </div>
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-900 font-medium">Welcome, {user?.name}</span>
                <button
                  onClick={() => navigate('/profile')}
                  className="text-gray-900 hover:text-gray-700"
                >
                  Profile
                </button>
              </div>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative">
        <main className="relative bg-[#FFC244FF] px-0 pt-10">
          <div className="max-w-7xl mx-auto">
            {categoriesStatus === 'loading' ? (
              <div className="text-center">Loading categories...</div>
            ) : categoriesStatus === 'failed' ? (
              <div className="text-center text-red-500">Failed to load categories</div>
            ) : (
              <>
                <CategoryList categories={categories} />
                <RestaurantList />
              </>
            )}
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
        onSubmit={(address) => {
          dispatch(wrappedSetAddress(address));
          setIsAddressModalOpen(false);
        }}
      />

      {/* Scroll to top button */}
      {showScrollButton && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-8 right-8 bg-[#00A082FF] text-white p-3 rounded-full shadow-lg hover:bg-[#00846BFF] transition-colors"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default HomePage;
