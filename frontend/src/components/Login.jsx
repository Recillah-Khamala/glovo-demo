import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { isLoginModalOpen, toggleLoginModal } = useAuth();

  useEffect(() => {
    if (isLoginModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoginModalOpen]);

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

  if (!isLoginModalOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={toggleLoginModal}
      />
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div
            className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleLoginModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
              aria-label="Close login modal"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold">Welcome</p>
              <p className="text-gray-600">
                Continue with one of the following options
              </p>
              <div className="mt-4 flex flex-col gap-2 w-full">
                <button
                  className="bg-[#25D366] text-white px-4 py-2 rounded hover:bg-[#128C7E] transition-colors w-full"
                  type="button"
                  aria-label="Login with WhatsApp"
                  onClick={handleWhatsAppLogin}
                >
                  WhatsApp
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors w-full"
                  type="button"
                  aria-label="Login with SMS"
                  onClick={handleSMSLogin}
                >
                  SMS
                </button>
              </div>
              <div className="mt-4 text-gray-500">or with</div>
              <div className="flex space-x-4 mt-4">
                <button
                  className="border rounded p-2 flex items-center hover:bg-gray-50 transition-colors"
                  onClick={() => handleSocialLogin("Google")}
                  aria-label="Login with Google"
                >
                  <img
                    src="/assets/google.svg"
                    alt="Google"
                    className="w-6 h-6 mr-2"
                  />
                  Google
                </button>
                <button
                  className="border rounded p-2 flex items-center hover:bg-gray-50 transition-colors"
                  onClick={() => handleSocialLogin("Facebook")}
                  aria-label="Login with Facebook"
                >
                  <img
                    src="/assets/facebook.svg"
                    alt="Facebook"
                    className="w-6 h-6 mr-2"
                  />
                  Facebook
                </button>
                <button
                  className="border rounded p-2 flex items-center hover:bg-gray-50 transition-colors"
                  onClick={() => handleSocialLogin("Email")}
                  aria-label="Login with Email"
                >
                  <img
                    src="/assets/email.svg"
                    alt="Email"
                    className="w-6 h-6 mr-2"
                  />
                  Email
                </button>
              </div>
              <div className="mt-4 text-gray-500 text-sm text-center max-w-md px-4">
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
      </div>
    </>
  );
};

export default Login;
