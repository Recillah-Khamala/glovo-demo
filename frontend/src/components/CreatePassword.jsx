import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useDispatch } from "react-redux";
import { setLoginView } from "../store/loginSlice";
import LoginHeader from "./LoginHeader";
import lockIcon from "../assets/lock.svg";

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

const EyeIcon = () => (
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
      d="M36 51C36 44.3726 41.3726 39 48 39C54.6274 39 60 44.3726 60 51C60 57.6274 54.6274 63 48 63C41.3726 63 36 57.6274 36 51ZM48 46C45.2386 46 43 48.2386 43 51C43 53.7614 45.2386 56 48 56C50.7614 56 53 53.7614 53 51C53 48.2386 50.7614 46 48 46Z"
      fill="#161617"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M51.5 19.5C51.5 17.567 49.933 16 48 16C46.067 16 44.5 17.567 44.5 19.5V26.1847C40.7806 26.5754 37.197 27.5724 33.8243 29.0492L30.7984 23.2041C29.9097 21.4875 27.7977 20.8164 26.0811 21.705C24.3645 22.5937 23.6933 24.7057 24.582 26.4223L27.6798 32.4062C24.7522 34.3431 22.0588 36.6421 19.6645 39.1938L14.574 34.9961C13.0827 33.7663 10.8768 33.9783 9.64697 35.4696C8.41717 36.961 8.62919 39.1669 10.1205 40.3967L15.2669 44.6405C14.2087 46.1719 13.2499 47.7554 12.4007 49.3738C11.8653 50.3943 11.8665 51.6129 12.404 52.6323C19.1126 65.3564 32.6211 76 47.9816 76C63.3611 76 76.8953 65.4031 83.5993 52.6262C84.1347 51.6057 84.1335 50.387 83.596 49.3676C82.7456 47.7546 81.7858 46.1749 80.7268 44.6462L85.8801 40.3967C87.3714 39.1669 87.5834 36.961 86.3536 35.4696C85.1238 33.9783 82.9179 33.7663 81.4266 34.9961L76.3258 39.2024C73.9323 36.6524 71.2408 34.3523 68.3155 32.4133L71.4175 26.4215C72.3062 24.7049 71.635 22.5929 69.9184 21.7042C68.2018 20.8155 66.0898 21.4867 65.2011 23.2033L62.174 29.0505C58.802 27.5704 55.2191 26.5712 51.5 26.1821V19.5Z"
      fill="#161617"
    />
  </svg>
);

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { toggleLoginModal } = useAuth();
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(setLoginView("email"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement password creation logic
    console.log("Creating account with password:", password);
  };

  return (
    <div className="bg-white">
      <LoginHeader />

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
            <div>
              <img
                alt="lock"
                src={lockIcon}
                width="96"
                height="96"
                loading="lazy"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
              />
              <p className="pintxo-typography-title2 EmailForm_title__FTOE_ text-3xl font-bold mb-4">
                Create a password
              </p>
              <p className="pintxo-typography-body1 EmailForm_text__wspKT text-zinc-950 text-xl mb-4">
                Add a way to protect your account.
              </p>
              <div className="PasswordInput_passwordField__ufKZe">
                <div className="Field_pintxo-field-container__oICbz">
                  <div className="FieldHeader_pintxo-field-header__H1Uqt mb-2">
                    <div>
                      <span
                        id="password-header"
                        className="FieldHeader_pintxo-field-header__label__UzrUo font-bold text-base text-zinc-500"
                      >
                        Password
                      </span>
                    </div>
                  </div>
                  <div className="BaseInput_pintxo-base-input__99D1j text-input relative">
                    <input
                      className="BaseInput_pintxo-base-input__input__N7OGR pintxo-typography-body1 w-full px-12 py-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#017963] focus:border-transparent text-zinc-800 text-lg font-semibold"
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
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      <EyeIcon />
                    </button>
                  </div>
                </div>
              </div>
              <div className="EmailForm_submit__gCVss w-full mt-6">
                <button
                  className="BaseButton_pintxo-button__OUsk3 pintxo-typography-callout1 w-full bg-[#017963] text-white text-lg font-bold py-3 rounded-[50px] hover:bg-[#00664E] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  disabled={!password}
                  onClick={handleSubmit}
                  type="submit"
                >
                  <span className="BaseButton_pintxo-button__content__LsfEa">
                    <span className="BaseButton_pintxo-button__content__label__JfXya">
                      Create account
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

export default CreatePassword;
