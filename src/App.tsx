import React from 'react';
import { useAppSelector } from './store/hooks';
import './App.css';

function App() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="app-wrapper">
      <div className="landing-wrapper">
        {/* Header */}
        <header className="unified-header unified-header__color--yellow">
          <div className="unified-header-desktop">
            <div className="unified-header-desktop__top">
              <div className="unified-header-desktop__left">
                <a href="/" aria-label="Home" className="header-logo">
                  <div className="glovo-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="glovo-logo-balloon" style={{ maxWidth: '32px' }}>
                      <path fill="#00A082" d="M7 10.3574C7 5.19772 11.2683 1 16.5147 1c5.2464 0 9.5146 4.19772 9.485 9.3574 0 1.9531-.5928 3.8479-1.7784 5.4512l-.2372.3498-4.95 6.8796s-.6224.962-1.9266.962h-1.1856c-1.3339 0-1.9267-.962-1.9267-.962l-4.94999-6.8796-.26677-.3498C7.62245 14.2053 7 12.3105 7 10.3574Zm13.1605 3.09.2667-.3498c.5929-.8162.9189-1.7491.9189-2.7693 0-2.62361-2.1638-4.75162-4.8314-4.75162-2.6677 0-4.8315 2.12801-4.8315 4.75162 0 .9911.3261 1.9531.9189 2.7693l.2668.379 3.6458 5.043 3.6458-5.0722ZM16.5 26c-1.4326 0-2.5 1.1143-2.5 2.5143 0 1.3428 1.0674 2.4571 2.4719 2.4857C17.9326 31 19 29.8857 19 28.5143v-.0286C19 27.1143 17.9326 26 16.5 26Z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 32" className="glovo-logo-text">
                      <path fill="#00A082" d="M0 20.944v-.062C0 14.947 4.527 9.917 10.894 9.917c3.169 0 5.28.758 7.211 2.152.363.273.755.787.755 1.514 0 1-.814 1.848-1.84 1.848-.483 0-.845-.211-1.147-.425-1.358-.998-2.836-1.666-5.13-1.666-3.892 0-6.85 3.424-6.85 7.482v.06c0 4.363 2.867 7.573 7.182 7.573 1.992 0 3.802-.636 5.1-1.605v-3.967H12.01c-.905 0-1.659-.698-1.659-1.606 0-.909.754-1.636 1.66-1.636h5.885c1.055 0 1.87.817 1.87 1.879v5.663c0 1.06-.422 1.818-1.298 2.363-1.811 1.212-4.346 2.302-7.513 2.302C4.345 31.848 0 27.123 0 20.944m23.093-9.905a1.8 1.8 0 0 1 1.81-1.818c1.026 0 1.842.818 1.842 1.818v18.78c0 1.03-.816 1.817-1.841 1.817a1.8 1.8 0 0 1-1.811-1.817v-18.78zm19.817 12.54v-.06c0-2.818-2.021-5.15-4.888-5.15-2.927 0-4.798 2.302-4.798 5.089v.06c0 2.787 2.022 5.119 4.858 5.119 2.957 0 4.828-2.302 4.828-5.058m-13.337 0v-.06c0-4.575 3.62-8.361 8.51-8.361 4.888 0 8.479 3.725 8.479 8.3v.06c0 4.544-3.621 8.33-8.54 8.33-4.86 0-8.449-3.725-8.449-8.269m26.105 8.209h-.18c-.997 0-1.661-.637-2.083-1.607l-5.31-12.206c-.092-.273-.212-.575-.212-.908 0-.91.815-1.757 1.81-1.757.996 0 1.51.574 1.811 1.333l4.104 10.6 4.164-10.66c.271-.636.755-1.273 1.72-1.273.996 0 1.78.757 1.78 1.757 0 .333-.12.697-.21.878L57.76 30.18c-.423.94-1.087 1.607-2.083 1.607m22.274-8.208v-.06c0-2.818-2.02-5.15-4.888-5.15-2.927 0-4.798 2.302-4.798 5.089v.06c0 2.787 2.022 5.119 4.86 5.119 2.955 0 4.826-2.302 4.826-5.058m-13.337 0v-.06c0-4.575 3.621-8.361 8.51-8.361 4.888 0 8.479 3.725 8.479 8.3v.06c0 4.544-3.62 8.33-8.54 8.33-4.858 0-8.449-3.725-8.449-8.269"/>
                      <path fill="#00A082" d="m90.661 9.961-.2.28-2.751 3.897-2.748-3.89-.201-.282a3.648 3.648 0 0 1 2.949-5.781 3.65 3.65 0 0 1 2.95 5.776M87.711.639c-3.956 0-7.171 3.23-7.171 7.199 0 1.511.468 2.962 1.351 4.195l.19.266 3.735 5.288s.455.747 1.448.747h.892c.995 0 1.448-.747 1.448-.747l3.732-5.289.19-.266a7.155 7.155 0 0 0 1.352-4.195c0-3.969-3.217-7.198-7.17-7.198M85.692 21.58v-.014c0-1.076.851-1.966 2-1.966 1.15 0 1.994.876 1.994 1.952v.014c0 1.067-.852 1.957-2.008 1.957-1.14 0-1.986-.875-1.986-1.943"/>
                    </svg>
                  </div>
                </a>
              </div>
              
              <div className="unified-header-desktop__center">
                <div className="address-container">
                  <div className="address-input">
                    <div className="address-input__container">
                      <div className="address-input__container--left">
                        <div className="address-input__container__icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4.125 8.8648C4.125 4.59333 7.6601 1.125 12 1.125C16.3399 1.125 19.875 4.59333 19.875 8.8648C19.875 10.5107 19.5009 12.2592 18.7689 14.06C18.2011 15.4599 17.4128 16.8999 16.4244 18.3481C15.6945 19.4161 14.9171 20.4011 14.1403 21.282C13.6582 21.8288 13.2272 22.2758 13.036 22.4559C12.7553 22.7279 12.3837 22.875 12 22.875C11.614 22.875 11.2393 22.7269 10.966 22.4587C10.7533 22.2557 10.3387 21.8242 9.85811 21.278C9.08129 20.395 8.30417 19.4086 7.57439 18.3395C6.5875 16.8928 5.79879 15.452 5.23027 14.0531C4.4988 12.2512 4.125 10.5056 4.125 8.8648Z" stroke="#292929" strokeWidth="1.5"/>
                          </svg>
                        </div>
                        <div className="address-input__container__input">
                          What's your address?
                        </div>
                      </div>
                      <div className="address-input--arrow">
                        <img src="https://glovoapp.com/images/svg/arrowForward.svg" alt="Forward" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="unified-header-desktop__right">
                <button type="button" className="login-button">
                  <div className="login-button__content">
                    <img src="https://glovoapp.com/images/svg/login.svg" alt="" className="login-button__icon" />
                    <div className="login-button__title">Login</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Landing Content */}
        <div className="landing-container">
          <div className="landing-jumbotron">
            <h1 className="landing-jumbotron__title">
              Food delivery and more
            </h1>
            <p className="landing-jumbotron__subtitle">
              Groceries, shops, pharmacies, anything!
            </p>
            
            {/* Address Input */}
            <div className="address-container landing__address-input">
              <div className="address-input">
                <div className="address-input__container">
                  <div className="address-input__container--left">
                    <div className="address-input__container__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4.125 8.8648C4.125 4.59333 7.6601 1.125 12 1.125C16.3399 1.125 19.875 4.59333 19.875 8.8648C19.875 10.5107 19.5009 12.2592 18.7689 14.06C18.2011 15.4599 17.4128 16.8999 16.4244 18.3481C15.6945 19.4161 14.9171 20.4011 14.1403 21.282C13.6582 21.8288 13.2272 22.2758 13.036 22.4559C12.7553 22.7279 12.3837 22.875 12 22.875C11.614 22.875 11.2393 22.7269 10.966 22.4587C10.7533 22.2557 10.3387 21.8242 9.85811 21.278C9.08129 20.395 8.30417 19.4086 7.57439 18.3395C6.5875 16.8928 5.79879 15.452 5.23027 14.0531C4.4988 12.2512 4.125 10.5056 4.125 8.8648Z" stroke="#292929" strokeWidth="1.5"/>
                      </svg>
                    </div>
                    <div className="address-input__container__input">
                      What's your address?
                    </div>
                  </div>
                  <div className="address-input--arrow">
                    <img src="https://glovoapp.com/images/svg/arrowForward.svg" alt="Forward" />
                  </div>
                </div>
              </div>
              
              <div className="current-location-wrapper">
                <div className="current-location">
                  <img src="https://glovoapp.com/images/svg/locationArrow.svg" className="use-current-location--location-arrow" alt="Location" />
                  <div className="current-location__text">
                    Use current location
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Bubbles */}
          <div className="bubbles-container">
            <div className="landing__categories">
              <div className="category-bubble">
                <div className="category-bubble__shadow">
                  <div className="category-bubble__blob">
                    <div className="category-bubble__data">
                      <img src="https://glovo.dhmedia.io/image/customer-assets-glovo/category_group_icons/a79ace566074e380f98056265cac2c0ae312dbfecb165dea7d7247d406f6305d?t=W3siYXV0byI6eyJxIjoiaGlnaCJ9fSx7InJlc2l6ZSI6eyJtb2RlIjoiZml0Iiwid2lkdGgiOjEyMCwiaGVpZ2h0IjoxMjB9fV0=" height="60" className="category-bubble__data__img" alt="Food" />
                    </div>
                  </div>
                </div>
                <div className="category-bubble__title">
                  <span className="category-bubble__text">Food</span>
                </div>
              </div>

              <div className="category-bubble">
                <div className="category-bubble__shadow">
                  <div className="category-bubble__blob">
                    <div className="category-bubble__data">
                      <img src="https://glovo.dhmedia.io/image/customer-assets-glovo/category_group_icons/606bd23a6f58cb7f062bfa8b83054df699404797eeae2bd67f41e7d8885d45e1?t=W3siYXV0byI6eyJxIjoiaGlnaCJ9fSx7InJlc2l6ZSI6eyJtb2RlIjoiZml0Iiwid2lkdGgiOjEyMCwiaGVpZ2h0IjoxMjB9fV0=" height="60" className="category-bubble__data__img" alt="Package Delivery" />
                    </div>
                  </div>
                </div>
                <div className="category-bubble__title">
                  <span className="category-bubble__text">Package Delivery</span>
                </div>
              </div>

              <div className="category-bubble">
                <div className="category-bubble__shadow">
                  <div className="category-bubble__blob">
                    <div className="category-bubble__data">
                      <img src="https://glovo.dhmedia.io/image/customer-assets-glovo/category_group_icons/abe0e6d60c9e6e62d73ede9d1eec870dac15283d32b5aeee41045402e466eed3?t=W3siYXV0byI6eyJxIjoiaGlnaCJ9fSx7InJlc2l6ZSI6eyJtb2RlIjoiZml0Iiwid2lkdGgiOjEyMCwiaGVpZ2h0IjoxMjB9fV0=" height="60" className="category-bubble__data__img" alt="Pharmacy & Beauty" />
                    </div>
                  </div>
                </div>
                <div className="category-bubble__title">
                  <span className="category-bubble__text">Pharmacy & Beauty</span>
                </div>
              </div>

              <div className="category-bubble">
                <div className="category-bubble__shadow">
                  <div className="category-bubble__blob">
                    <div className="category-bubble__data">
                      <img src="https://glovo.dhmedia.io/image/customer-assets-glovo/category_group_icons/cc38634d7f470f25c61bb209899f12a44032cb0251409b4cd75368da5c881978?t=W3siYXV0byI6eyJxIjoiaGlnaCJ9fSx7InJlc2l6ZSI6eyJtb2RlIjoiZml0Iiwid2lkdGgiOjEyMCwiaGVpZ2h0IjoxMjB9fV0=" height="60" className="category-bubble__data__img" alt="Shops" />
                    </div>
                  </div>
                </div>
                <div className="category-bubble__title">
                  <span className="category-bubble__text">Shops</span>
                </div>
              </div>

              <div className="category-bubble">
                <div className="category-bubble__shadow">
                  <div className="category-bubble__blob">
                    <div className="category-bubble__data">
                      <img src="https://glovo.dhmedia.io/image/customer-assets-glovo/category_group_icons/c0fd33b415a34052003807189c2a8e5c513b1fcef4be33a79052344abecfcc02?t=W3siYXV0byI6eyJxIjoiaGlnaCJ9fSx7InJlc2l6ZSI6eyJtb2RlIjoiZml0Iiwid2lkdGgiOjEyMCwiaGVpZ2h0IjoxMjB9fV0=" height="60" className="category-bubble__data__img" alt="Groceries" />
                    </div>
                  </div>
                </div>
                <div className="category-bubble__title">
                  <span className="category-bubble__text">Groceries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
