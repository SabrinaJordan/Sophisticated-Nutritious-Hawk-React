import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './values.css'

const Values = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div id="Values" className="values-container1 thq-section-padding">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="values-image1"
      />
      <div className="values-container2 thq-section-max-width">
        <div className="values-tabs-menu1">
          <div
            onClick={() => setActiveTab(0)}
            className="values-tab-horizontal1"
          >
            <div className="values-content1">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="values-text14 thq-heading-2">
                      Empowered &amp; Accountable
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="values-text13 thq-body-small">
                      autonomy, authority, enabled
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="values-tab-horizontal2"
          >
            <div className="values-content2">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="values-text22 thq-heading-2">
                      Put People First
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="values-text19 thq-body-small">
                      employee growth, happiness, and support
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="values-tab-horizontal3"
          >
            <div className="values-content3">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="values-text11 thq-heading-2">
                      Earn Respect &amp; Trust
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="values-text23 thq-body-small">
                      act with integrity and transparency
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="values-tab-horizontal4"
          >
            <div className="values-content4">
              <h2>
                {props.feature3Title4 ?? (
                  <Fragment>
                    <h2 className="values-text25 thq-heading-2">
                      Evolving &amp; Innovative
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description4 ?? (
                  <Fragment>
                    <span className="values-text16 thq-body-small">
                      embrace learning and growth
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="values-image-container1">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="values-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="values-image3 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="values-image4 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
      <div className="values-container3 thq-section-max-width">
        <div className="values-image-container2">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt2}
              src={props.feature1ImgSrc2}
              className="values-image5 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt2}
              src={props.feature2ImgSrc2}
              className="values-image6 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt2}
              src={props.feature3ImgSrc2}
              className="values-image7 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="values-tabs-menu2">
          <div
            onClick={() => setActiveTab(0)}
            className="values-tab-horizontal5"
          >
            <div className="values-content5">
              <h2>
                {props.feature1Title3 ?? (
                  <Fragment>
                    <h2 className="values-text20 thq-heading-2">
                      Elevate our Communities
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description3 ?? (
                  <Fragment>
                    <span className="values-text10 thq-body-small">
                      mindfully choose our business and giving partners to
                      positively impact the world
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="values-tab-horizontal6"
          >
            <div className="values-content6">
              <h2>
                {props.feature2Title2 ?? (
                  <Fragment>
                    <h2 className="values-text18 thq-heading-2">
                      Excellence with Humility
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description2 ?? (
                  <Fragment>
                    <span className="values-text24 thq-body-small">
                      be exceptional and be humble
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="values-tab-horizontal7"
          >
            <div className="values-content7">
              <h2>
                {props.feature3Title6 ?? (
                  <Fragment>
                    <h2 className="values-text21 thq-heading-2">
                      Embrace an Ownership Mentality
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description6 ?? (
                  <Fragment>
                    <span className="values-text12 thq-body-small">
                      successes and challenges faced together
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="values-tab-horizontal8"
          >
            <div className="values-content8">
              <h2>
                {props.feature3Title42 ?? (
                  <Fragment>
                    <h2 className="values-text15 thq-heading-2">
                      Equity and Inclusion
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description42 ?? (
                  <Fragment>
                    <span className="values-text17 thq-body-small">
                      embrace diversity and lived experiences
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Values.defaultProps = {
  feature1Description3: undefined,
  feature3Title: undefined,
  feature3Description6: undefined,
  feature1ImgSrc: '/img_20201011_120505-1400w.jpg',
  feature3ImgAlt: 'Data Visualization Image',
  feature1Description: undefined,
  feature1ImgSrc2: '/20230923_182003-1400w.jpg',
  feature1Title: undefined,
  feature2ImgAlt2: 'Data Transformation Image',
  feature3Title42: undefined,
  feature3Description4: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1639815188508-13f7370f664a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg3OTIxMnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgSrc2:
    'https://images.unsplash.com/photo-1639815188508-13f7370f664a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg3OTIxMnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description42: undefined,
  imageSrc: '/8%20bit%20values-200h.png',
  feature2ImgAlt: 'Data Transformation Image',
  feature2Title2: undefined,
  imageAlt: 'image',
  feature2Description: undefined,
  feature1Title3: undefined,
  feature1ImgAlt: 'Data Cleansing Image',
  feature3Title6: undefined,
  feature2Title: undefined,
  feature3ImgAlt2: 'Data Visualization Image',
  feature1ImgAlt2: 'Data Cleansing Image',
  feature3Description: undefined,
  feature3ImgSrc2:
    'https://images.unsplash.com/photo-1680458842024-9a87dc72faa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg3OTIxMnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description2: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1680458842024-9a87dc72faa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg3OTIxMnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title4: undefined,
}

Values.propTypes = {
  feature1Description3: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3Description6: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1ImgSrc2: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2ImgAlt2: PropTypes.string,
  feature3Title42: PropTypes.element,
  feature3Description4: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature2ImgSrc2: PropTypes.string,
  feature3Description42: PropTypes.element,
  imageSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title2: PropTypes.element,
  imageAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1Title3: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature3Title6: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3ImgAlt2: PropTypes.string,
  feature1ImgAlt2: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3ImgSrc2: PropTypes.string,
  feature2Description2: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature3Title4: PropTypes.element,
}

export default Values
