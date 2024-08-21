import React from 'react'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div className="header-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="header-image1"
      />
      <div className="header-container1"></div>
      <div className="header-max-width thq-section-max-width">
        <div className="header-content">
          <div className="header-container2">
            <img
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="header-image2"
            />
            <div className="header-container3">
              <h1 className="header-text1 thq-heading-1">{props.heading1}</h1>
              <p className="header-text2 thq-body-large">{props.content1}</p>
              <div className="header-actions">
                <a
                  href="#Services"
                  className="header-button1 thq-button-filled"
                >
                  <span className="header-text3 thq-body-small">
                    {props.action1}
                  </span>
                </a>
                <a
                  href="#Contact"
                  className="header-button2 thq-button-outline"
                >
                  <span className="header-text4 thq-body-small">
                    {props.action2}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  image1Src: '/_5632fda2-3162-458c-b07b-aef27645b1b0-1500w.jpg',
  imageSrc2: '/final-200w.png',
  imageSrc1: '/final-200w.png',
  content1: 'Where Values Inspire Vision and Insights',
  action1: 'Learn More',
  image1Alt: 'Data Consulting Image',
  action2: 'Get in Touch',
  imageAlt2: 'image',
  heading1: 'Unlock the Power of Your Data with 8bit Insights',
  imageAlt1: 'image',
}

Header.propTypes = {
  image1Src: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
  action2: PropTypes.string,
  imageAlt2: PropTypes.string,
  heading1: PropTypes.string,
  imageAlt1: PropTypes.string,
}

export default Header
