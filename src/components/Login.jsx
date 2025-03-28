import React, { useState, useRef, useEffect } from "react";
import LoginHeader from "./LoginHeader";
import googleIcon from "../assets/google.svg";
import facebookIcon from "../assets/facebook.svg";
import EmailLoginForm from "./EmailLoginForm";
import CreatePassword from "./CreatePassword";
import CreateName from "./CreateName";
import { useDispatch, useSelector } from "react-redux";
import { setLoginView } from "../store/loginSlice";
import { useNavigate } from "react-router-dom";

// Replace the email icon import with the URL
const emailIcon = "https://glovoapp.com/_next/static/media/email.caf0e00b.svg";

// TODO: This should be fetched from the backend API
// Example API endpoint: /api/countries
// Should return an array of countries with:
// - code: Country code (e.g., "ES")
// - name: Country name (e.g., "Spain")
// - prefix: Phone prefix (e.g., "+34")
// - flag: Country flag emoji (e.g., "🇪🇸")
// Consider implementing:
// 1. API endpoint for countries list
// 2. Loading state while fetching
// 3. Error handling if fetch fails
// 4. Caching mechanism to avoid frequent requests
const COUNTRIES = [
  { code: "ES", name: "Spain", prefix: "+34", flag: "🇪🇸" },
  { code: "GB", name: "United Kingdom", prefix: "+44", flag: "🇬🇧" },
  { code: "FR", name: "France", prefix: "+33", flag: "🇫🇷" },
  { code: "DE", name: "Germany", prefix: "+49", flag: "🇩🇪" },
  { code: "IT", name: "Italy", prefix: "+39", flag: "🇮🇹" },
  { code: "PT", name: "Portugal", prefix: "+351", flag: "🇵🇹" },
  { code: "NL", name: "Netherlands", prefix: "+31", flag: "🇳🇱" },
  { code: "BE", name: "Belgium", prefix: "+32", flag: "🇧🇪" },
  { code: "US", name: "United States", prefix: "+1", flag: "🇺🇸" },
  { code: "CA", name: "Canada", prefix: "+1", flag: "🇨🇦" },
  { code: "KE", name: "Kenya", prefix: "+254", flag: "KE" },
];

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.0251 21.0251C22.392 19.6583 24.608 19.6583 25.9749 21.0251L48 43.0503L70.0251 21.0251C71.392 19.6583 73.608 19.6583 74.9749 21.0251C76.3417 22.392 76.3417 24.608 74.9749 25.9749L52.9497 48L74.9749 70.0251C76.3417 71.392 76.3417 73.608 74.9749 74.9749C73.608 76.3417 71.392 76.3417 70.0251 74.9749L48 52.9497L25.9749 74.9749C24.608 76.3417 22.392 76.3417 21.0251 74.9749C19.6583 73.608 19.6583 71.392 21.0251 70.0251L43.0503 48L21.0251 25.9749C19.6583 24.608 19.6583 22.392 21.0251 21.0251Z"
      fill="currentColor"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M74.9517 37.0003C76.3323 38.3532 76.3547 40.5692 75.0017 41.9498L50.5017 66.9498C49.8434 67.6215 48.9425 68 48.002 68C47.0614 68 46.1605 67.6215 45.5022 66.9498L21.0022 41.9498C19.6492 40.5692 19.6716 38.3532 21.0522 37.0003C22.4328 35.6473 24.6487 35.6697 26.0017 37.0503L48.002 59.4995L70.0022 37.0503C71.3552 35.6697 73.5711 35.6473 74.9517 37.0003Z"
      fill="currentColor"
    />
  </svg>
);

const Login = ({ onBack }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const currentLoginView = useSelector((state) => state.login?.currentView);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Redirect to home if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Show email form if currentLoginView is "email"
  if (currentLoginView === "email") {
    return <EmailLoginForm onBack={() => dispatch(setLoginView(null))} />;
  }

  // Show create password form if currentLoginView is "create-password"
  if (currentLoginView === "create-password") {
    return <CreatePassword />;
  }

  // Show create name form if currentLoginView is "create-name"
  if (currentLoginView === "create-name") {
    return <CreateName />;
  }

  // Show main login view by default
  const handleWhatsAppLogin = () => {
    // TODO: Implement WhatsApp login logic
    console.log("WhatsApp login clicked");
  };

  const handleSMSLogin = () => {
    // TODO: Implement SMS login logic
    console.log("SMS login clicked");
  };

  const handleSocialLogin = (provider) => {
    if (provider === "Email") {
      dispatch(setLoginView("email"));
    } else {
      // TODO: Implement social login logic
      console.log(`${provider} login clicked`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <LoginHeader onBack={onBack} />

      {/* Login Content */}
      <div className="max-w-md mx-auto px-4 py-8 relative" style={{ marginTop: "120px" }}>
        <div className="flex flex-col items-center space-y-6">
          {/* Close Button */}
          <button
            onClick={() => navigate('/home')}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close login"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <p className="text-4xl font-bold">Welcome</p>
          <p className="text-lg text-gray-600">Continue with one of the following options</p>

          {/* Phone Number Input Section */}
          <div className="w-full mt-8 flex gap-3">
            {/* Prefix Dropdown */}
            <div className="w-32" ref={dropdownRef}>
              <div className="Field_pintxo-field-container__oICbz">
                <div className="FieldHeader_pintxo-field-header__H1Uqt">
                  <span className="text-gray-600 font-bold">Prefix</span>
                </div>
                <div className="relative">
                  <button
                    className="w-full flex items-center gap-2 px-3 py-4 border rounded-lg border-gray-400 focus:ring-1 focus:ring-[#017963] bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    type="button"
                  >
                    <span>{selectedCountry.flag}</span>
                    <span className="flex-1 text-left">
                      {selectedCountry.prefix}
                    </span>
                    <ChevronDownIcon />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute z-50 w-64 mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {COUNTRIES.map((country) => (
                        <button
                          key={country.code}
                          className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 transition-colors"
                          onClick={() => {
                            setSelectedCountry(country);
                            setIsDropdownOpen(false);
                          }}
                        >
                          <span>{country.flag}</span>
                          <span className="flex-1 text-left">
                            {country.name}
                          </span>
                          <span className="text-gray-500">
                            {country.prefix}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Phone Number Input */}
            <div className="flex-1">
              <div className="Field_pintxo-field-container__oICbz">
                <div className="FieldHeader_pintxo-field-header__H1Uqt">
                  <span className="text-gray-600 font-bold">Phone number</span>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-3 py-4 border rounded-lg border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#017963] focus:border-transparent "
                    placeholder="Phone number"
                    aria-label="Phone number"
                  />
                  {phoneNumber && (
                    <button
                      onClick={() => setPhoneNumber("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1 border rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                      aria-label="Clear phone number"
                    >
                      <CloseIcon />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* reCAPTCHA Terms */}
          <p className="w-full text-base text-neutral-950 mt-6">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-[#017963] font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              className="text-[#017963] font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>

          {/* Verification Methods */}
          <div className="w-full mt-8 flex gap-3">
            <button
              className="flex-1 px-4 py-2 border-2 border-[#017963] text-[#017963] bg-[#e0f0ed] font-bold rounded-[50px] hover:bg-[#c6ebe4] transition-colors"
              type="submit"
              name="WhatsApp"
              onClick={handleWhatsAppLogin}
            >
              <span className="flex items-center justify-center">
                <span>WhatsApp</span>
              </span>
            </button>
            <button
              className="flex-1 px-4 py-2 bg-[#017963] text-white font-bold rounded-[50px] hover:bg-[#00664E] transition-colors"
              type="submit"
              name="SMS"
              onClick={handleSMSLogin}
            >
              <span className="flex items-center justify-center">
                <span>SMS</span>
              </span>
            </button>
          </div>

          <div className="mt-6 text-gray-500 text-xl">or with</div>

          {/* Social Login */}
          <section className="mt-6 grid grid-row-3 gap-4 w-full">
            <div id="google-button-prompt-target"></div>
            <button
              className="BaseButton_pintxo-button__OUsk3 LoginButton_socialButton__XqOuf pintxo-typography-callout1 w-full border border-zinc-300 rounded-[50px] py-3 flex justify-center hover:bg-[#e6e5f6]"
              data-size="m"
              data-variant="floating"
              data-disabled="false"
              data-loading="false"
              data-block="true"
              data-rtl="false"
              type="submit"
              onClick={() => handleSocialLogin("Google")}
            >
              <span className="BaseButton_pintxo-button__content__LsfEa">
                <span className="BaseButton_pintxo-button__content__label__JfXya">
                  <span className="LoginButton_socialButtonImage__9U5ye flex items-center gap-0">
                    <img
                      alt="google"
                      loading="lazy"
                      width="34"
                      height="34"
                      decoding="async"
                      src={googleIcon}
                    />
                    <span className="text-zinc-950 text-base font-extrabold">
                      Google
                    </span>
                  </span>
                </span>
              </span>
            </button>
            <button
              className="BaseButton_pintxo-button__OUsk3 LoginButton_socialButton__XqOuf pintxo-typography-callout1 w-full border border-zinc-300 rounded-[50px] py-3 flex justify-center hover:bg-[#e6e5f6]"
              data-size="m"
              data-variant="floating"
              data-disabled="false"
              data-loading="false"
              data-block="true"
              data-rtl="false"
              type="submit"
              onClick={() => handleSocialLogin("Facebook")}
            >
              <span className="BaseButton_pintxo-button__content__LsfEa">
                <span className="BaseButton_pintxo-button__content__label__JfXya">
                  <span className="LoginButton_socialButtonImage__9U5ye flex items-center gap-1">
                    <img
                      alt="facebook"
                      loading="lazy"
                      width="30"
                      height="30"
                      decoding="async"
                      src={facebookIcon}
                    />
                    <span className="text-zinc-950 text-base font-extrabold">
                      Facebook
                    </span>
                  </span>
                </span>
              </span>
            </button>
            <button
              className="BaseButton_pintxo-button__OUsk3 LoginButton_socialButton__XqOuf pintxo-typography-callout1 w-full border border-zinc-300 rounded-[50px] py-3 flex justify-center hover:bg-[#e6e5f6]"
              data-size="m"
              data-variant="floating"
              data-disabled="false"
              data-loading="false"
              data-block="true"
              data-rtl="false"
              type="button"
              onClick={() => handleSocialLogin("Email")}
            >
              <span className="BaseButton_pintxo-button__content__LsfEa">
                <span className="BaseButton_pintxo-button__content__label__JfXya">
                  <span className="LoginButton_socialButtonImage__9U5ye flex items-center gap-2">
                    <img
                      alt="Email"
                      loading="lazy"
                      width="30"
                      height="30"
                      decoding="async"
                      src={emailIcon}
                    />
                    <span className="text-zinc-950 text-base font-extrabold">
                      Email
                    </span>
                  </span>
                </span>
              </span>
            </button>
          </section>

          {/* Terms and Services */}
          <div className="mt-8 text-gray-500 text-lg text-center">
            By creating an account, you automatically accept our{" "}
            <a
              href="https://glovoapp.com/docs/en/legal/terms/"
              className="hover:underline text-[#017963] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of service
            </a>
            ,{" "}
            <a
              href="https://glovoapp.com/docs/en/legal/privacy/"
              className="hover:underline text-[#017963] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            , and{" "}
            <a
              href="https://glovoapp.com/en/legal/cookies/"
              className="hover:underline text-[#017963] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
