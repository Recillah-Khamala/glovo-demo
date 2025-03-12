import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import LoginHeader from "./LoginHeader";

const BackIcon = () => (
  <svg
    className="NamedIcon_pintxo-icon__foreground__RbIjm"
    width="96"
    height="96"
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
    width="96"
    height="96"
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

const EmailIcon = () => (
  <svg
    className="NamedIcon_pintxo-icon__foreground__RbIjm"
    width="96"
    height="96"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 67.5C10 73.299 14.701 78 20.5 78H75.5C81.299 78 86 73.299 86 67.5V28.5C86 26.8796 85.633 25.345 84.9775 23.9747L85.0102 23.941L84.9171 23.8506C83.2023 20.3839 79.6295 18 75.5 18H20.5C16.3702 18 12.7972 20.3843 11.0825 23.8514L10.9902 23.941L11.0227 23.9744C10.3671 25.3448 10 26.8795 10 28.5V67.5ZM17 30.125V67.5C17 69.433 18.567 71 20.5 71H75.5C77.433 71 79 69.433 79 67.5V30.1254L55.5301 54.2756C51.4067 58.5185 44.5937 58.5185 40.4703 54.2756L17 30.125ZM74.22 25H21.7804L45.4902 49.3971C46.8647 50.8114 49.1357 50.8114 50.5102 49.397L74.22 25Z"
      fill="#161617"
    />
  </svg>
);

const EmailLoginForm = () => {
  const [email, setEmail] = useState("");
  const { toggleLoginModal } = useAuth();

  const handleBack = () => {
    // TODO: Implement back navigation
    console.log("Back clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement email login logic
    console.log("Submit with email:", email);
  };

  return (
    <div className="min-h-screen bg-white">
      <LoginHeader />

      {/* Main Content - Add margin-top to account for fixed header */}
      <div className="max-w-md mx-auto px-4 py-2" style={{ marginTop: "84px" }}>
        <section className="Login_container__Bh12h">
          <section>
            <div>
              <div className="flex justify-between mb-8">
                <button
                  className="BaseButton_pintxo-button__OUsk3 IconButton_pintxo-icon-button__XwNcu pintxo-typography-callout2"
                  data-size="s"
                  data-variant="neutral"
                  data-disabled="false"
                  data-loading="false"
                  data-block="false"
                  data-rtl="false"
                  role="button"
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
                  className="BaseButton_pintxo-button__OUsk3 IconButton_pintxo-icon-button__XwNcu pintxo-typography-callout2"
                  data-size="s"
                  data-variant="neutral"
                  data-disabled="false"
                  data-loading="false"
                  data-block="false"
                  data-rtl="false"
                  role="button"
                  type="button"
                  aria-label="Close"
                  onClick={toggleLoginModal}
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
            <div className="flex flex-col items-center">
              <img
                alt="email-envelope"
                loading="lazy"
                width="96"
                height="96"
                src="/_next/static/media/email-envelope.65b98a02.svg"
                className="mb-6"
              />
              <p className="pintxo-typography-title2 EmailForm_title__FTOE_ text-2xl font-bold mb-2">
                Let's start with your email
              </p>
              <p className="pintxo-typography-body1 EmailForm_text__wspKT text-gray-600 mb-6">
                We'll check if you already have an account. If not, we'll create
                a new one.
              </p>
              <div className="Field_pintxo-field-container__oICbz w-full">
                <div className="FieldHeader_pintxo-field-header__H1Uqt mb-2">
                  <div>
                    <span
                      id=":r9:-header"
                      className="FieldHeader_pintxo-field-header__label__UzrUo font-semibold"
                    >
                      Email
                    </span>
                  </div>
                </div>
                <div className="BaseInput_pintxo-base-input__99D1j text-input relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <EmailIcon />
                  </span>
                  <input
                    className="BaseInput_pintxo-base-input__input__N7OGR pintxo-typography-body1 w-full px-12 py-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#017963] focus:border-transparent"
                    aria-label="Email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {email && (
                    <button
                      onClick={() => setEmail("")}
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
                  className="BaseButton_pintxo-button__OUsk3 pintxo-typography-callout1 w-full bg-[#017963] text-white font-bold py-3 rounded-[50px] hover:bg-[#00664E] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  disabled={!email}
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
          </section>
        </section>
      </div>
    </div>
  );
};

export default EmailLoginForm;
