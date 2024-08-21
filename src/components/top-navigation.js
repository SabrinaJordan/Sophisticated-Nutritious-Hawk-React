import React from 'react'

import PropTypes from 'prop-types'

import './top-navigation.css'

const TopNavigation = (props) => {
  return (
    <header id="Top" className="top-navigation-container">
      <header
        data-thq="thq-navbar"
        className="top-navigation-navbar-interactive"
      >
        <div data-thq="thq-navbar-nav" className="top-navigation-desktop-menu">
          <nav className="top-navigation-links1">
            <span className="thq-link thq-body-small">{props.link1}</span>
            <a
              href="#Services"
              className="top-navigation-link21 thq-link thq-body-small"
            >
              {props.link2}
            </a>
            <a href="#Values" className="top-navigation-link51">
              {props.link5}
            </a>
            <a
              href="#About"
              className="top-navigation-link31 thq-link thq-body-small"
            >
              {props.link3}
            </a>
            <a
              href="#Contact"
              className="top-navigation-link41 thq-link thq-body-small"
            >
              {props.link4}
            </a>
          </nav>
          <div className="top-navigation-buttons1">
            <a
              href="mailto:info@8bitinsights.com?subject=Contact Request"
              name="emailUs"
              className="top-navigation-email-us1 thq-button-filled thq-button-animated"
            >
              <span className="top-navigation-email-us2 thq-body-small">
                Email Us
              </span>
            </a>
            <a
              href="tel:+12316311073"
              className="top-navigation-action21 thq-button-outline thq-button-animated"
            >
              <span className="thq-body-small">Call Us</span>
            </a>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="top-navigation-burger-menu">
          <svg viewBox="0 0 1024 1024" className="top-navigation-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="top-navigation-mobile-menu">
          <div className="top-navigation-nav">
            <div className="top-navigation-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="top-navigation-logo"
              />
              <div
                data-thq="thq-close-menu"
                className="top-navigation-close-menu"
              >
                <svg viewBox="0 0 1024 1024" className="top-navigation-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="top-navigation-links2">
              <span className="thq-link thq-body-small">{props.link1}</span>
              <span className="thq-link thq-body-small">{props.link2}</span>
              <span className="thq-link thq-body-small">{props.link3}</span>
              <span className="thq-link thq-body-small">{props.link4}</span>
              <span className="thq-link thq-body-small">{props.link5}</span>
            </nav>
          </div>
          <div className="top-navigation-buttons2">
            <button className="thq-button-filled">{props.action1}</button>
            <button className="thq-button-outline">Register</button>
          </div>
        </div>
      </header>
    </header>
  )
}

TopNavigation.defaultProps = {
  logoSrc: '/final-1400w.png',
  link1: 'Home',
  action2: 'Action 2',
  link5: 'Values',
  link3: 'About Us',
  link2: 'Services',
  link4: 'Contact',
  action1: 'Email Us',
  logoAlt: '8bit Insights Logo',
}

TopNavigation.propTypes = {
  logoSrc: PropTypes.string,
  link1: PropTypes.string,
  action2: PropTypes.string,
  link5: PropTypes.string,
  link3: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
  action1: PropTypes.string,
  logoAlt: PropTypes.string,
}

export default TopNavigation
