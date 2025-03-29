import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { wrappedSetLoginView, wrappedSetName } from "../store/loginSlice";
import { loginSuccess } from "../redux/actions/authActions";
import LoginHeader from "./LoginHeader";
import nameTagIcon from "../assets/name-tag.svg";

const BackIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.4753 21.0249C39.8421 22.3917 39.8421 24.6078 38.4752 25.9746L19.9498 44.4998L84.5004 44.4998C86.4334 44.4998 88.0004 46.0668 88.0004 47.9998C88.0004 49.9328 86.4334 51.4998 84.5004 51.4998L19.9498 51.4998L38.4752 70.0249C39.8421 71.3917 39.8421 73.6078 38.4753 74.9746C37.1085 76.3415 34.8924 76.3415 33.5255 74.9747L9.02515 50.4746C8.36876 49.8183 8 48.928 8 47.9998C8 47.0715 8.36876 46.1812 9.02515 45.5249L33.5255 21.0249C34.8924 19.658 37.1085 19.6581 38.4753 21.0249Z"
      fill="#161617"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.0251 21.0251C22.392 19.6583 24.608 19.6583 25.9749 21.0251L48 43.0503L70.0251 21.0251C71.392 19.6583 73.608 19.6583 74.9749 21.0251C76.3417 22.392 76.3417 24.608 74.9749 25.9749L52.9497 48L74.9749 70.0251C76.3417 71.392 76.3417 73.608 74.9749 74.9749C73.608 76.3417 71.392 76.3417 70.0251 74.9749L48 52.9497L25.9749 74.9749C24.608 76.3417 22.392 76.3417 21.0251 74.9749C19.6583 73.608 19.6583 71.392 21.0251 70.0251L43.0503 48L21.0251 25.9749C19.6583 24.608 19.6583 22.392 21.0251 21.0251Z"
      fill="#161617"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48 10C38.0589 10 30 18.0589 30 28C30 37.9411 38.0589 46 48 46C57.9411 46 66 37.9411 66 28C66 18.0589 57.9411 10 48 10ZM37 28C37 21.9249 41.9249 17 48 17C54.0751 17 59 21.9249 59 28C59 34.0751 54.0751 39 48 39C41.9249 39 37 34.0751 37 28Z"
      fill="#161617"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48.0002 50C31.7752 50 17.9456 60.2645 13.0037 74.6053C11.6667 78.4849 14.7519 82 18.3725 82H77.6279C81.2486 82 84.3337 78.4849 82.9967 74.6053C78.0548 60.2645 64.2252 50 48.0002 50ZM48.0002 57C60.4972 57 71.1622 64.4606 75.6529 75H20.3475C24.8382 64.4606 35.5033 57 48.0002 57Z"
      fill="#161617"
    />
  </svg>
);

const CreateName = () => {
  const [name, setNameValue] = useState("");
  const { toggleLoginModal, login } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((state) => state.login.email);

  const handleBack = () => {
    dispatch(wrappedSetLoginView("create-password"));
  };

  const handleClose = () => {
    navigate('/home');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting name:", name);

    try {
      // Store name in Redux state
      dispatch(wrappedSetName(name));
      
      // Create user object with all registration data
      const user = {
        name,
        email,
        isAuthenticated: true
      };

      // Update auth state in Redux
      dispatch(loginSuccess(user));
      
      // Update auth context
      login();

      // Close the login modal
      toggleLoginModal();
      
      // Navigate to home page
      navigate("/home");
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  return (
    <div className="bg-white">
      <LoginHeader />
      <div className="max-w-md mx-auto px-4 py-2" style={{ marginTop: "84px" }}>
        <section className="Login_container__Bh12h">
          <section>
            <div>
              <div className="flex justify-between mb-6">
                <button
                  className="p-2 hover:bg-gray-100 rounded-lg"
                  type="button"
                  aria-label="Back"
                  onClick={handleBack}
                >
                  <BackIcon />
                </button>
                <button
                  className="p-2 hover:bg-gray-100 rounded-lg"
                  type="button"
                  aria-label="Close"
                  onClick={handleClose}
                >
                  <CloseIcon />
                </button>
              </div>
            </div>
            <div>
              <div>
                <img
                  alt="name"
                  src={nameTagIcon}
                  width="96"
                  height="96"
                  className="mb-1"
                  style={{ color: "transparent" }}
                />
              </div>
              <div>
                <p className="text-3xl font-bold mb-4">Tell us your name</p>
              </div>
              <div>
                <p className="text-zinc-950 text-xl mb-4">
                  Nearly there! Just tell us what you want us to call you in
                  your profile.
                </p>
              </div>
              <div className="mb-2">
                <span className="text-base font-bold text-gray-500">Name</span>
              </div>
              <div className="relative mb-4">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <UserIcon />
                </div>
                <input
                  className="w-full pl-12 pr-12 py-3 border rounded-lglj border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#017963] focus:border-transparent text-zinc-800 text-lg"
                  type="text"
                  value={name}
                  onChange={(e) => setNameValue(e.target.value)}
                  placeholder="Your name"
                  aria-label="Name"
                />
                {name && (
                  <button
                    onClick={() => setNameValue("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
                    aria-label="Clear name"
                  >
                    <CloseIcon />
                  </button>
                )}
              </div>

              <div className="w-full">
                <button
                  className="w-full bg-[#017963] text-white text-lg font-bold py-3 rounded-[50px] hover:bg-[#00664E] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  disabled={!name.trim()}
                  onClick={handleSubmit}
                  type="submit"
                >
                  Continue
                </button>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default CreateName;
