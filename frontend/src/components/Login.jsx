import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

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

const PintxoLogo = () => (
  <svg
    width="120"
    height="40"
    viewBox="0 0 171 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <g className="MainLogo_pintxo-logo__logotype__main--primary__yn4Fm">
        <path
          d="M41.641 18.6392C41.641 16.8276 43.0516 15.3779 44.9066 15.3779C46.7606 15.3779 48.2122 16.8276 48.2122 18.6392V52.335C48.2122 54.1867 46.7606 55.5963 44.9066 55.5963C43.0926 55.5963 41.641 54.1876 41.641 52.335V18.6392Z"
          fill="#009E81"
        />
        <path
          d="M0 36.4334V36.3125C0 25.6847 8.14298 16.6666 19.6317 16.6666C25.356 16.6666 29.1452 18.0353 32.612 20.5318C33.2567 21.0147 33.9825 21.9405 33.9825 23.2292C33.9825 25.0408 32.5309 26.5305 30.6769 26.5305C29.7899 26.5305 29.1452 26.1685 28.6206 25.7656C26.1619 23.994 23.501 22.7863 19.3894 22.7863C12.3757 22.7863 7.05383 28.946 7.05383 36.1924V36.3134C7.05383 44.1237 12.2135 49.8805 19.9941 49.8805C23.582 49.8805 26.8467 48.7537 29.1852 47.0221V39.8966H21.6469C20.0342 39.8966 18.6636 38.6489 18.6636 36.9982C18.6636 35.3876 20.0342 34.0598 21.6469 34.0598H32.2486C34.1437 34.0598 35.6344 35.5095 35.6344 37.4411V47.586C35.6344 49.4785 34.8685 50.8472 33.2968 51.8131C30.0312 53.9866 25.4762 55.9592 19.7519 55.9592C7.86068 55.9592 0 47.505 0 36.4334Z"
          fill="#009E81"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53.3319 41.0234V41.1443C53.3319 49.2757 59.781 55.9592 68.5287 56.0001C77.3974 56.0001 83.9277 49.1966 83.9277 41.0643V40.9434C83.9277 32.7302 77.4776 26.0476 68.6498 26.0476C59.8621 26.0476 53.3319 32.8111 53.3319 41.0234ZM77.3574 41.0234V41.1443C77.3574 46.0953 73.9707 50.2024 68.6107 50.2434C63.491 50.2434 59.863 46.0563 59.863 41.0643V40.9434C59.863 35.9505 63.2488 31.8043 68.5296 31.8043C73.7294 31.8043 77.3574 35.9914 77.3574 41.0234Z"
          fill="#009E81"
        />
        <path
          d="M100.375 55.8783H100.052C98.2384 55.8783 97.0692 54.7515 96.3033 52.9799L86.7497 31.0795C86.7403 31.0512 86.7307 31.0226 86.721 30.9938L86.7202 30.9913C86.565 30.5286 86.3873 29.9987 86.3873 29.4689C86.3873 27.8583 87.8389 26.3286 89.6529 26.3286C91.4669 26.3286 92.3539 27.3753 92.9185 28.704L100.296 47.706L107.794 28.5831C108.277 27.4563 109.164 26.2886 110.898 26.2886C112.712 26.2886 114.123 27.6573 114.123 29.4289C114.123 30.0327 113.922 30.6766 113.76 30.9986L104.126 52.9799C103.358 54.6705 102.149 55.8783 100.375 55.8783Z"
          fill="#009E81"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M116.459 41.0234V41.1443C116.459 49.2757 122.949 55.9592 131.696 56.0001C140.565 56.0001 147.095 49.1966 147.095 41.0643V40.9434C147.095 32.7302 140.645 26.0476 131.818 26.0476C122.989 26.0476 116.459 32.8111 116.459 41.0234ZM140.525 41.0234V41.1443C140.525 46.0953 137.138 50.2024 131.778 50.2434C126.659 50.2434 123.031 46.0563 123.031 41.0643V40.9434C123.031 35.9505 126.417 31.8043 131.697 31.8043C136.897 31.8043 140.525 35.9914 140.525 41.0234Z"
          fill="#009E81"
        />
      </g>
      <g className="MainLogo_pintxo-logo__symbol__main--primary__UhmcT">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M145.16 12.9232C145.16 5.79679 150.966 0 158.1 0C165.235 0 171.04 5.79679 171 12.9232C171 15.6206 170.194 18.2371 168.581 20.4516L168.259 20.9345L161.526 30.4355C161.526 30.4355 160.68 31.7642 158.906 31.7642H157.294C155.48 31.7642 154.674 30.4355 154.674 30.4355L147.941 20.9345L147.579 20.4516C146.007 18.2371 145.16 15.6206 145.16 12.9232ZM163.059 17.1903L163.421 16.7074C164.227 15.5797 164.671 14.2919 164.671 12.8832C164.671 9.25998 161.728 6.32158 158.1 6.32158C154.472 6.32158 151.53 9.25998 151.53 12.8832C151.53 14.2519 151.974 15.5806 152.78 16.7074L153.142 17.2303L158.1 24.1949L163.059 17.1903Z"
          fill="#FFCD1A"
        />
        <path
          d="M158.06 34.0187C156.004 34.0187 154.472 35.5884 154.472 37.561C154.472 39.4526 156.004 41.0232 158.02 41.0632C160.117 41.0632 161.648 39.4936 161.648 37.561V37.521C161.648 35.5884 160.117 34.0187 158.06 34.0187Z"
          fill="#FFCD1A"
        />
      </g>
    </g>
  </svg>
);

const Login = () => {
  const { isLoginModalOpen, toggleLoginModal } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isLoginModalOpen) return null;

  const handleWhatsAppLogin = () => {
    // TODO: Implement WhatsApp login logic
    console.log("WhatsApp login clicked");
  };

  const handleSMSLogin = () => {
    // TODO: Implement SMS login logic
    console.log("SMS login clicked");
  };

  const handleSocialLogin = (provider) => {
    // TODO: Implement social login logic
    console.log(`${provider} login clicked`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo */}
      <div className="border-b">
        <div className="max-w-[calc(1124px+15%)] mx-auto px-2 md:px-[6.5%] py-5">
          <PintxoLogo />
        </div>
      </div>

      {/* Login Content */}
      <div className="max-w-md mx-auto px-4 py-2">
        <div className="flex flex-col items-center">
          <div className="w-full mb-8 flex justify-end">
            <button
              onClick={toggleLoginModal}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
              aria-label="Close"
              type="button"
            >
              <CloseIcon />
            </button>
          </div>

          <p className="text-4xl font-bold pb-3">Welcome</p>
          <p className="text-lg">Continue with one of the following options</p>

          {/* Phone Number Input Section */}
          <div className="w-full mt-6 flex gap-3">
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

          <div className="mt-8 w-full space-y-4">
            <button
              className="w-full bg-[#25D366] text-white px-4 py-3 rounded hover:bg-[#128C7E] transition-colors"
              type="button"
              aria-label="Login with WhatsApp"
              onClick={handleWhatsAppLogin}
            >
              WhatsApp
            </button>
            <button
              className="w-full bg-green-500 text-white px-4 py-3 rounded hover:bg-green-600 transition-colors"
              type="button"
              aria-label="Login with SMS"
              onClick={handleSMSLogin}
            >
              SMS
            </button>
          </div>

          <div className="mt-6 text-gray-500">or with</div>

          <div className="mt-6 grid grid-cols-3 gap-4 w-full">
            <button
              className="flex items-center justify-center border rounded-lg py-3 px-4 hover:bg-gray-50 transition-colors"
              onClick={() => handleSocialLogin("Google")}
              aria-label="Login with Google"
            >
              <img src="/assets/google.svg" alt="Google" className="w-6 h-6" />
            </button>
            <button
              className="flex items-center justify-center border rounded-lg py-3 px-4 hover:bg-gray-50 transition-colors"
              onClick={() => handleSocialLogin("Facebook")}
              aria-label="Login with Facebook"
            >
              <img
                src="/assets/facebook.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
            </button>
            <button
              className="flex items-center justify-center border rounded-lg py-3 px-4 hover:bg-gray-50 transition-colors"
              onClick={() => handleSocialLogin("Email")}
              aria-label="Login with Email"
            >
              <img src="/assets/email.svg" alt="Email" className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-8 text-gray-500 text-sm text-center">
            By creating an account, you automatically accept our{" "}
            <a
              href="https://glovoapp.com/docs/en/legal/terms/"
              className="underline hover:text-gray-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of service
            </a>
            ,{" "}
            <a
              href="https://glovoapp.com/docs/en/legal/privacy/"
              className="underline hover:text-gray-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            , and{" "}
            <a
              href="https://glovoapp.com/en/legal/cookies/"
              className="underline hover:text-gray-700 transition-colors"
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
