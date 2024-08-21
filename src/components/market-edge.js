import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './market-edge.css'

const MarketEdge = (props) => {
  return (
    <div className="market-edge-layout251 thq-section-padding">
      <div
        id="Services"
        className="market-edge-max-width thq-section-max-width"
      >
        <div className="thq-flex-row market-edge-section-title">
          <div className="market-edge-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 market-edge-text2">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="market-edge-content1">
          <div className="market-edge-row thq-flex-row">
            <div className="market-edge-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 market-edge-feature1-image"
              />
              <div className="market-edge-content2 thq-flex-column">
                <h3>
                  {props.feature1Title1 ?? (
                    <Fragment>
                      <h3 className="market-edge-feature1-title2 thq-heading-3">
                        <span>Customized Data</span>
                        <br></br>
                        <span>Solutions</span>
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="market-edge-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 market-edge-feature2-image"
              />
              <div className="market-edge-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="market-edge-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 market-edge-feature3-image"
              />
              <div className="market-edge-content4 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="market-edge-actions">
          <button className="thq-button-filled market-edge-button1">
            <a href="#Contact" className="market-edge-action1 thq-body-small">
              {props.mainAction}
            </a>
          </button>
          <button className="thq-button-outline market-edge-button2">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

MarketEdge.defaultProps = {
  secondaryAction: 'Learn more about us',
  sectionDescription:
    'Discover how 8bit Insights can transform your data into decisions and actions',
  feature2Title: 'Everything-You-Need Data  Expertise',
  feature2ImageAlt: 'Data Visualization Expertise Image',
  feature2Description:
    'We can cleanse, move, transform, model, and visualize your data; integrated from disparate source systems into elegant, accurate, and timely reports and alerts to drive your success to new heights.',
  feature3ImageSrc: '/_40b71423-6da1-4bda-a103-4469ad7a9243-300h.jpg',
  feature3Description:
    'Unlock the insights from your data to make the best decisions for your strategic and operational goals, and empower your people to take action toward improvements and efficiency.',
  sectionTitle: 'Our Market Edge',
  feature1Description:
    'We tailor our data consulting services to meet your specific industry and business needs. Our experience encompasses financial services, retail, non-profit, educational, governmental, and industrial clients.',
  mainAction: 'Book a consultation now',
  feature2ImageSrc: '/abstract%20art%201-300h.png',
  feature1ImageAlt: 'Customized Data Solutions Image',
  feature3ImageAlt: 'Data-driven Decision Making Image',
  slogan: 'Empowering Your Data Journey',
  feature1ImageSrc: '/dtc_168_d306010f-7966-4616-948b-38c8835e0fdb-1400w.jpg',
  feature3Title: 'Data-driven Decision Making',
  feature1Title1: undefined,
}

MarketEdge.propTypes = {
  secondaryAction: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature1Description: PropTypes.string,
  mainAction: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  slogan: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1Title1: PropTypes.element,
}

export default MarketEdge
