import React from 'react'

import PropTypes from 'prop-types'

import './contact-info.css'

const ContactInfo = (props) => {
  return (
    <div id="Contact" className="contact-info-contact20 thq-section-padding">
      <div className="contact-info-max-width thq-section-max-width">
        <div className="contact-info-section-title">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact-info-content1">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="contact-info-text3 thq-body-large">
              {props.content1}
            </p>
          </div>
        </div>
        <div className="contact-info-row">
          <div className="contact-info-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact-info-contact-info1">
              <div className="contact-info-content3">
                <h3 className="contact-info-text4 thq-heading-3">Email</h3>
                <p className="contact-info-text5 thq-body-large">
                  {props.content3}
                </p>
              </div>
              <span className="contact-info-email thq-body-small">
                {props.clientContactEmail}
              </span>
            </div>
          </div>
          <div className="contact-info-content4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact-info-contact-info2">
              <div className="contact-info-content5">
                <h3 className="contact-info-text6 thq-heading-3">Phone</h3>
                <p className="contact-info-text7 thq-body-large">
                  {props.content4}
                </p>
              </div>
              <span className="contact-info-phone thq-body-small">
                {props.sabrinaPhone}
              </span>
            </div>
          </div>
          <div className="contact-info-content6">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact-info-contact-info3">
              <div className="contact-info-content7">
                <h3 className="contact-info-text8 thq-heading-3">Office</h3>
                <p className="contact-info-text9 thq-body-large">
                  {props.content5}
                </p>
              </div>
              <span className="contact-info-address thq-body-small">
                {props.mailingAddress}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ContactInfo.defaultProps = {
  content2: 'We are here to assist you in unlocking the power of your data.',
  content3:
    'Our team of experts is ready to provide tailored solutions for your business.',
  clientContactEmail: 'info@8bitinsights.com',
  mailingAddress: 'P.O. Box 413, Traverse City, MI 49685',
  content1:
    'Feel free to reach out to us for any inquiries or to discuss how we can help with your data consulting needs.',
  content4: "Let's start the conversation today!",
  sabrinaPhone: '+1 (231) 631-1073',
  content5: 'Follow us on social media for updates and insights.',
  heading1: 'Contact Us',
}

ContactInfo.propTypes = {
  content2: PropTypes.string,
  content3: PropTypes.string,
  clientContactEmail: PropTypes.string,
  mailingAddress: PropTypes.string,
  content1: PropTypes.string,
  content4: PropTypes.string,
  sabrinaPhone: PropTypes.string,
  content5: PropTypes.string,
  heading1: PropTypes.string,
}

export default ContactInfo
