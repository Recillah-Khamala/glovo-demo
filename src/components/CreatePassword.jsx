import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { wrappedSetLoginView, wrappedSetPassword } from "../store/loginSlice";
import { authAPI } from "../services/api";
import LoginHeader from "./LoginHeader";
import lockIcon from "../assets/lock.svg";
import eyeOpen from "../assets/eye-open.svg";
import eyeClosed from "../assets/eye-closed.svg";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

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

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((state) => state.login.email);

  const passwordStrength = useMemo(() => {
    if (!password) return null;

    const hasMinLength = password.length >= 9;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!hasMinLength) {
      return {
        message: "Password must contain at least 9 characters",
        status: "too-weak",
        color: "text-red-500",
      };
    }

    if (hasLetter && hasNumber && hasSpecial) {
      return {
        message: "Password strength: Strong",
        status: "strong",
        color: "text-green-600",
      };
    }

    return {
      message: "Password strength: Not bad",
      status: "medium",
      color: "text-yellow-600",
    };
  }, [password]);

  const handleBack = () => {
    dispatch(wrappedSetLoginView("email"));
  };

  const handleClose = () => {
    navigate('/home');
  };

  const handleSubmit = async () => {
    console.log("handleSubmit started");
    setLoading(true);
    setError(null);

    try {
      // Create user with email and password
      const response = await authAPI.signup({
        email,
        password,
        registration_step: 'password'  // Add this to track registration progress
      });

      console.log('Signup response:', response);

      // Store password in Redux state
      dispatch(wrappedSetPassword(password));
      
      // Navigate to create name view
      dispatch(wrappedSetLoginView("create-name"));
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      const errorMessage = error.response?.data?.message || error.message || "Failed to create account. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <LoginHeader />
      <div className="max-w-md mx-auto px-4 py-2" style={{ marginTop: "84px" }}>
        <section>
          <div>
            <div className="flex justify-between mb-8">
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
            <img
              alt="lock"
              src={lockIcon}
              width="96"
              height="96"
              className="mb-4"
              style={{ color: "transparent" }}
            />
            <p className="text-3xl font-bold mb-4">Create a password</p>
            <p className="text-zinc-950 text-xl mb-4">
              Add a way to protect your account.
            </p>

            <div className="relative">
              <input
                className="w-full px-12 py-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#017963] focus:border-transparent text-zinc-800 text-lg font-semibold"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password"
              />
              {password && (
                <button
                  onClick={() => setPassword("")}
                  className="absolute right-12 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
                  aria-label="Clear password"
                >
                  <CloseIcon />
                </button>
              )}
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <img
                  src={showPassword ? eyeOpen : eyeClosed}
                  alt={showPassword ? "Hide password" : "Show password"}
                  className="w-6 h-6"
                />
              </button>
            </div>

            {password && (
              <div className="mt-4 mb-6">
                <p className={`text-sm font-medium ${passwordStrength?.color}`}>
                  {passwordStrength?.message}
                </p>
                <div className="mt-2 flex gap-1">
                  <div
                    className={`h-1 flex-1 rounded-full ${
                      passwordStrength?.status === "too-weak"
                        ? "bg-red-500"
                        : passwordStrength?.status === "medium"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  />
                  <div
                    className={`h-1 flex-1 rounded-full ${
                      passwordStrength?.status === "strong"
                        ? "bg-green-500"
                        : "bg-gray-200"
                    }`}
                  />
                  <div
                    className={`h-1 flex-1 rounded-full ${
                      passwordStrength?.status === "strong"
                        ? "bg-green-500"
                        : "bg-gray-200"
                    }`}
                  />
                </div>
              </div>
            )}

            <div className="w-full mt-6">
              <button
                className="w-full bg-[#017963] text-white text-lg font-bold py-3 rounded-[50px] hover:bg-[#00664E] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                disabled={!password}
                onClick={handleSubmit}
                type="button"
              >
                Create Account
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Loading and Error States */}
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default CreatePassword;
