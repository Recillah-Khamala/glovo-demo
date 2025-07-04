import React, { useState } from 'react';
import { GlovoLogo } from './GlovoLogo';

interface HeaderProps {
  onLoginClick?: () => void;
  onAddressClick?: () => void;
  onCurrentLocationClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onLoginClick,
  onAddressClick,
  onCurrentLocationClick,
}) => {
  const [isAddressDrawerOpen, setIsAddressDrawerOpen] = useState(false);

  return (
    <header className="unified-header unified-header__color--yellow">
      {/* Desktop Header */}
      <div className="unified-header-desktop">
        <div className="unified-header-desktop__top">
          <div className="unified-header-desktop__left">
            <a href="/" aria-label="Home" className="header-logo">
              <GlovoLogo size={32} balloonColor="green" />
            </a>
          </div>
          
          <div className="unified-header-desktop__center">
            <div className="unified-header-desktop__address-wrapper">
              <div className="address-container">
                <div className="address-container__input-wrapper">
                  <div className="address-input__wrapper">
                    <div className="address-input">
                      <div 
                        className="address-input__container"
                        onClick={() => {
                          setIsAddressDrawerOpen(!isAddressDrawerOpen);
                          onAddressClick?.();
                        }}
                      >
                        <div className="address-input__container--left">
                          <div className="address-input__container__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.125 8.8648C4.125 4.59333 7.6601 1.125 12 1.125C16.3399 1.125 19.875 4.59333 19.875 8.8648C19.875 10.5107 19.5009 12.2592 18.7689 14.06C18.2011 15.4599 17.4128 16.8999 16.4244 18.3481C15.6945 19.4161 14.9171 20.4011 14.1403 21.282C13.6582 21.8288 13.2272 22.2758 13.036 22.4559C12.7553 22.7279 12.3837 22.875 12 22.875C11.614 22.875 11.2393 22.7269 10.966 22.4587C10.7533 22.2557 10.3387 21.8242 9.85811 21.278C9.08129 20.395 8.30417 19.4086 7.57439 18.3395C6.5875 16.8928 5.79879 15.452 5.23027 14.0531C4.4988 12.2512 4.125 10.5056 4.125 8.8648Z" stroke="#292929" strokeWidth="1.5"/>
                              <mask id="mask0_3_3292" maskUnits="userSpaceOnUse" x="3" y="0" width="18" height="24" style={{ maskType: 'alpha' }}>
                                <path d="M4.125 8.8648C4.125 4.59333 7.6601 1.125 12 1.125C16.3399 1.125 19.875 4.59333 19.875 8.8648C19.875 10.5107 19.5009 12.2592 18.7689 14.06C18.2011 15.4599 17.4128 16.8999 16.4244 18.3481C15.6945 19.4161 14.9171 20.4011 14.1403 21.282C13.6582 21.8288 13.2272 22.2758 13.036 22.4559C12.7553 22.7279 12.3837 22.875 12 22.875C11.614 22.875 11.2393 22.7269 10.966 22.4587C10.7533 22.2557 10.3387 21.8242 9.85811 21.278C9.08129 20.395 8.30417 19.4086 7.57439 18.3395C6.5875 16.8928 5.79879 15.452 5.23027 14.0531C4.4988 12.2512 4.125 10.5056 4.125 8.8648Z" fill="white" stroke="white" strokeWidth="1.5"/>
                              </mask>
                              <g mask="url(#mask0_3_3292)">
                                <ellipse cx="12" cy="9.13281" rx="3.75" ry="3.75" stroke="#292929" strokeWidth="1.5"/>
                              </g>
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
                
                <div className="current-location-wrapper">
                  <div className="current-location current-location--insideAddressInput" onClick={onCurrentLocationClick}>
                    <img src="https://glovoapp.com/images/svg/locationArrow.svg" className="use-current-location--location-arrow" alt="Location" />
                    <div className="current-location__text">
                      Use current location
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="unified-header-desktop__right">
            <button 
              type="button" 
              className="helio-button login-button pill"
              onClick={onLoginClick}
            >
              <span className="helio-button__content">
                <div className="login-button__content">
                  <img src="https://glovoapp.com/images/svg/login.svg" alt="" className="login-button__icon" />
                  <div className="login-button__title">Login</div>
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="unified-header__mobile">
        <div className="unified-header-mobile">
          <div className="unified-header-mobile__top">
            <div className="unified-header-mobile__navigation-menu">
              <a href="/" aria-label="Home" className="header-logo">
                <GlovoLogo size={32} balloonColor="yellow" />
              </a>
            </div>
            <div>
              <button 
                type="button" 
                className="helio-button login-button pill"
                onClick={onLoginClick}
              >
                <span className="helio-button__content">
                  <div className="login-button__content">
                    <img src="https://glovoapp.com/images/svg/login.svg" alt="" className="login-button__icon" />
                    <div className="login-button__title">Login</div>
                  </div>
                </span>
              </button>
            </div>
          </div>
          
          <div className="unified-header-mobile__bottom">
            <div className="header-user-address">
              <div className="address-input-interactive header-user-address__input-container">
                <div className="address-input text-field pb-1">
                  <div className="text-autocomplete address-input__autocomplete text-field__input wide-autocomplete">
                    <div className="helio-input helio-input--with-separator">
                      <div className="helio-input__content">
                        <span className="helio-input__icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.125 8.8648C4.125 4.59333 7.6601 1.125 12 1.125C16.3399 1.125 19.875 4.59333 19.875 8.8648C19.875 10.5107 19.5009 12.2592 18.7689 14.06C18.2011 15.4599 17.4128 16.8999 16.4244 18.3481C15.6945 19.4161 14.9171 20.4011 14.1403 21.282C13.6582 21.8288 13.2272 22.2758 13.036 22.4559C12.7553 22.7279 12.3837 22.875 12 22.875C11.614 22.875 11.2393 22.7269 10.966 22.4587C10.7533 22.2557 10.3387 21.8242 9.85811 21.278C9.08129 20.395 8.30417 19.4086 7.57439 18.3395C6.5875 16.8928 5.79879 15.452 5.23027 14.0531C4.4988 12.2512 4.125 10.5056 4.125 8.8648Z" stroke="#292929" strokeWidth="1.5"/>
                            <mask id="mask0_3_3292" maskUnits="userSpaceOnUse" x="3" y="0" width="18" height="24" style={{ maskType: 'alpha' }}>
                              <path d="M4.125 8.8648C4.125 4.59333 7.6601 1.125 12 1.125C16.3399 1.125 19.875 4.59333 19.875 8.8648C19.875 10.5107 19.5009 12.2592 18.7689 14.06C18.2011 15.4599 17.4128 16.8999 16.4244 18.3481C15.6945 19.4161 14.9171 20.4011 14.1403 21.282C13.6582 21.8288 13.2272 22.2758 13.036 22.4559C12.7553 22.7279 12.3837 22.875 12 22.875C11.614 22.875 11.2393 22.7269 10.966 22.4587C10.7533 22.2557 10.3387 21.8242 9.85811 21.278C9.08129 20.395 8.30417 19.4086 7.57439 18.3395C6.5875 16.8928 5.79879 15.452 5.23027 14.0531C4.4988 12.2512 4.125 10.5056 4.125 8.8648Z" fill="white" stroke="white" strokeWidth="1.5"/>
                            </mask>
                            <g mask="url(#mask0_3_3292)">
                              <ellipse cx="12" cy="9.13281" rx="3.75" ry="3.75" stroke="#292929" strokeWidth="1.5"/>
                            </g>
                          </svg>
                        </span>
                        <div className="helio-input__controls">
                          <label className="helio-input__placeholder">
                            What's your address?
                          </label>
                          <input 
                            type="text" 
                            className="helio-input__input"
                            placeholder="What's your address?"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <img src="https://glovoapp.com/images/svg/arrowForward.svg" className="text-autocomplete__arrow" alt="Forward" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}; 