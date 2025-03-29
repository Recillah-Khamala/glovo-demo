import React, { useState } from "react";
import LoginHeader from "./LoginHeader";
import emailEnvelope from "../assets/email-envelope.svg";
import emailIcon from "../assets/email-icon.svg";
import { useDispatch } from "react-redux";
import { wrappedSetLoginView, wrappedSetEmail } from "../store/loginSlice";
import { useNavigate } from "react-router-dom";

const BackIcon = () => (
  <svg
    className="NamedIcon_pintxo-icon__foreground__RbIjm"
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
    className="NamedIcon_pintxo-icon__foreground__RbIjm"
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

const EmailLoginForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBack = () => {
    console.log("Back button clicked");
    dispatch(wrappedSetLoginView("login"));
    console.log("Dispatched setLoginView with 'login'");
  };

  const handleClose = () => {
    navigate('/home');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Check if user exists in backend
    const userExists = false; // This will come from backend

    // Store email in Redux state
    dispatch(wrappedSetEmail(emailValue));

    if (userExists) {
      // TODO: Navigate to login with password view
      console.log("User exists, should show login view");
    } else {
      // Navigate to create password view for new user
      dispatch(wrappedSetLoginView("create-password"));
    }
  };

  return (
    <div className="bg-white">
      <LoginHeader />

      {/* Main Content - Add margin-top to account for fixed header */}
      <div className="max-w-md mx-auto px-4 py-2" style={{ marginTop: "84px" }}>
        <section className="Login_container__Bh12h">
          <section>
            <div>
              <div className="flex justify-between mb-8">
                <button
                  className="BaseButton_pintxo-button__OUsk3 IconButton_pintxo-icon-button__XwNcu pintxo-typography-callout2 p-2 hover:bg-gray-100 rounded-lg"
                  data-size="s"
                  data-variant="neutral"
                  data-disabled="false"
                  data-loading="false"
                  data-block="false"
                  data-rtl="false"
                  type="button"
                  aria-label="Back"
                  onClick={handleBack}
                >
                  <span className="BaseButton_pintxo-button__content__LsfEa">
                    <span className="BaseButton_pintxo-button__content__label__JfXya">
                      <span
                        className="NamedIcon_pintxo-icon__wBfWN"
                        data-size="m"
                        data-rtl="false"
                        data-outline="true"
                      >
                        <BackIcon />
                      </span>
                    </span>
                  </span>
                </button>
                <button
                  className="BaseButton_pintxo-button__OUsk3 IconButton_pintxo-icon-button__XwNcu pintxo-typography-callout2 p-2 hover:bg-gray-100 rounded-lg"
                  data-size="s"
                  data-variant="neutral"
                  data-disabled="false"
                  data-loading="false"
                  data-block="false"
                  data-rtl="false"
                  type="button"
                  aria-label="Close"
                  onClick={handleClose}
                >
                  <span className="BaseButton_pintxo-button__content__LsfEa">
                    <span className="BaseButton_pintxo-button__content__label__JfXya">
                      <span
                        className="NamedIcon_pintxo-icon__wBfWN"
                        data-size="m"
                        data-rtl="false"
                        data-outline="true"
                      >
                        <CloseIcon />
                      </span>
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col items-start w-full">
                <div className="w-full mb-1">
                  <img
                    alt="email-envelope"
                    src={emailEnvelope}
                    width="96"
                    height="96"
                    loading="lazy"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="w-full">
                  <p className="pintxo-typography-title2 EmailForm_title__FTOE_ text-3xl font-bold mb-4">
                    Let's start with your email
                  </p>
                </div>

                <p className="pintxo-typography-body1 EmailForm_text__wspKT text-zinc-950 text-xl mb-2">
                  We'll check if you already have an account. If not, we'll
                  create a new one.
                </p>
                <div className="Field_pintxo-field-container__oICbz w-full">
                  <div className="FieldHeader_pintxo-field-header__H1Uqt mb-2">
                    <div>
                      <span
                        id=":r9:-header"
                        className="FieldHeader_pintxo-field-header__label__UzrUo font-bold text-base text-zinc-500"
                      >
                        Email
                      </span>
                    </div>
                  </div>
                  <div className="BaseInput_pintxo-base-input__99D1j text-input relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <img
                        src={emailIcon}
                        alt="email"
                        width="25"
                        height="25"
                        className="opacity-70"
                      />
                    </span>
                    <input
                      className="BaseInput_pintxo-base-input__input__N7OGR pintxo-typography-body1 w-full px-12 py-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#017963] focus:border-transparent text-zinc-800 text-lg font-semibold"
                      aria-label="Email"
                      placeholder="Email"
                      type="email"
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                    />
                    {emailValue && (
                      <button
                        onClick={() => setEmailValue("")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
                        aria-label="Clear email"
                      >
                        <CloseIcon />
                      </button>
                    )}
                  </div>
                </div>
                <div className="EmailForm_submit__gCVss w-full mt-6">
                  <button
                    className="BaseButton_pintxo-button__OUsk3 pintxo-typography-callout1 w-full bg-[#017963] text-zinc-600 text-lg font-bold py-3 rounded-[50px] hover:bg-[#00664E] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    disabled={!emailValue}
                    onClick={handleSubmit}
                    type="submit"
                  >
                    <span className="BaseButton_pintxo-button__content__LsfEa">
                      <span className="BaseButton_pintxo-button__content__label__JfXya">
                        Continue
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default EmailLoginForm;
