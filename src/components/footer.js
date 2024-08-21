import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer4 thq-section-padding">
      <div className="footer-max-width thq-section-max-width">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer-image1"
            />
          </div>
          <div className="footer-links">
            <a href="#Top" className="footer-link5">
              {props.link5 ?? (
                <Fragment>
                  <span className="footer-text5 thq-body-small">Home</span>
                </Fragment>
              )}
            </a>
            <a href="#Services" className="footer-link2">
              {props.link2 ?? (
                <Fragment>
                  <span className="footer-text3 thq-body-small">Services</span>
                </Fragment>
              )}
            </a>
            <a href="#Values" className="footer-link3">
              {props.link3 ?? (
                <Fragment>
                  <span className="footer-text4 thq-body-small">Values</span>
                </Fragment>
              )}
            </a>
            <a href="#About" className="footer-link1">
              {props.link1 ?? (
                <Fragment>
                  <span className="footer-text2 thq-body-small">About Us</span>
                </Fragment>
              )}
            </a>
            <a href="#Contact" className="footer-link4">
              {props.link4 ?? (
                <Fragment>
                  <span className="footer-text1 thq-body-small">Contact</span>
                </Fragment>
              )}
            </a>
          </div>
          <div className="footer-social-links">
            <a
              href="https://www.linkedin.com/company/8bit-insights/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="footer-icon1 thq-icon-small"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer-row">
            <div className="footer-footer-links">
              <span className="thq-body-small">© 2024 8bit Insights, LLC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  link4: undefined,
  link1: undefined,
  link2: undefined,
  link3: undefined,
  link5: undefined,
  logoSrc: '/final%20long%208bit%20logo-200h.png',
  logoAlt: '8bit Insights Logo',
}

Footer.propTypes = {
  link4: PropTypes.element,
  link1: PropTypes.element,
  link2: PropTypes.element,
  link3: PropTypes.element,
  link5: PropTypes.element,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
}

export default Footer
