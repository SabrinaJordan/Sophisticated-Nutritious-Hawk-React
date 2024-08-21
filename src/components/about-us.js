import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './about-us.css'

const AboutUs = (props) => {
  return (
    <div id="About" className="about-us-team8 thq-section-padding">
      <div className="about-us-max-width thq-section-max-width">
        <div className="about-us-section-title1">
          <div className="about-us-content10">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="about-us-text58 thq-heading-2">
                    Meet our team of employee-owners
                  </h2>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="false"
          data-navigation="false"
          data-pagination="false"
          className="about-us-slider1 swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="about-us-slider-slide1 swiper-slide"
            >
              <div className="about-us-card10">
                <img
                  alt={props.member1Alt}
                  src={props.member1Src}
                  className="about-us-placeholder-image10 thq-img-ratio-1-1"
                />
                <div className="about-us-content11">
                  <div className="about-us-title10">
                    <span>
                      {props.member1 ?? (
                        <Fragment>
                          <span className="about-us-text74 thq-body-small">
                            Sabrina Jordan
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.member1Job ?? (
                        <Fragment>
                          <span className="about-us-text77 thq-body-small">
                            Architect, Founder
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span>
                    {props.member1Content ?? (
                      <Fragment>
                        <span className="about-us-text63 thq-body-small">
                          Sabrina is a self-driven futurist and strategist with
                          over a decade of modern data platform and business
                          intelligence experience. She is highly motivated to
                          build strong organizational relationships, uncover
                          efficiencies, and deliver multi-faceted technology
                          projects that exceed expectations. In addition, she
                          focuses on meeting tight deadlines and applying
                          creative and elegant solutions to organizational
                          challenges. Sabrina’s technical skillset combined with
                          her ability to collaborate with business executives
                          &amp; stakeholders around driving actionable insight,
                          data strategy, processes and project management have
                          allowed her to complete highly successful engagements.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="about-us-social-icons10">
                  <a
                    href="https://www.linkedin.com/in/sabrinamjordan/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="about-us-link"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-us-icon10 thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="about-us-card11">
                <img
                  alt={props.member3Alt}
                  src={props.member3Src}
                  className="thq-img-ratio-1-1"
                />
                <div className="about-us-content12">
                  <div className="about-us-title11">
                    <span>
                      {props.member3 ?? (
                        <Fragment>
                          <span className="about-us-text71 thq-body-small">
                            Alex Johnson
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.member3Job ?? (
                        <Fragment>
                          <span className="about-us-text59 thq-body-small">
                            Business Intelligence Specialist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span>
                    {props.member3Content ?? (
                      <Fragment>
                        <span className="about-us-text57 thq-body-small">
                          Alex leverages data visualization techniques to
                          communicate key findings effectively.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="about-us-social-icons11">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="about-us-slider-slide2 swiper-slide"
            >
              <div className="about-us-card12">
                <img
                  alt={props.member4Alt}
                  src={props.member4Src}
                  className="thq-img-ratio-1-1"
                />
                <div className="about-us-content13">
                  <div className="about-us-title12">
                    <span>
                      {props.member4 ?? (
                        <Fragment>
                          <span className="about-us-text61 thq-body-small">
                            Sarah Lee
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.member4Job ?? (
                        <Fragment>
                          <span className="about-us-text64 thq-body-small">
                            Data Engineer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span>
                    {props.member4Content ?? (
                      <Fragment>
                        <span className="about-us-text72 thq-body-small">
                          Sarah ensures data pipelines are optimized for
                          efficient processing and analysis.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="about-us-social-icons12">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="about-us-card13">
                <img
                  alt={props.member5Alt}
                  src={props.member5Src}
                  className="thq-img-ratio-1-1"
                />
                <div className="about-us-content14">
                  <div className="about-us-title13">
                    <span>
                      {props.member5 ?? (
                        <Fragment>
                          <span className="about-us-text69 thq-body-small">
                            Michael Brown
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.member5Job ?? (
                        <Fragment>
                          <span className="about-us-text68 thq-body-small">
                            Machine Learning Engineer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span>
                    {props.member5Content ?? (
                      <Fragment>
                        <span className="about-us-text76 thq-body-small">
                          Michael develops advanced algorithms to drive
                          predictive analytics and machine learning models.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="about-us-social-icons13">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="about-us-card14">
                <img
                  alt={props.member6Alt}
                  src={props.member6Src}
                  className="thq-img-ratio-1-1"
                />
                <div className="about-us-content15">
                  <div className="about-us-title14">
                    <span>
                      {props.member6 ?? (
                        <Fragment>
                          <span className="about-us-text65 thq-body-small">
                            Emily Davis
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.member6Job ?? (
                        <Fragment>
                          <span className="about-us-text73 thq-body-small">
                            Data Visualization Specialist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span>
                    {props.member6Content ?? (
                      <Fragment>
                        <span className="about-us-text62 thq-body-small">
                          Emily creates visually engaging dashboards to present
                          data insights in a compelling way.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="about-us-social-icons14">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="about-us-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="about-us-slider-button-prev1 swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="about-us-slider-button-next1 swiper-button-next"
          ></div>
        </div>
        <div className="about-us-section-title2">
          <span>
            {props.content11 ?? (
              <Fragment>
                <span className="about-us-text70 thq-body-small">
                  Join our team and own your career!
                </span>
              </Fragment>
            )}
          </span>
          <a
            href="https://www.linkedin.com/company/8bit-insights/jobs/"
            target="_blank"
            rel="noreferrer noopener"
            className="about-us-button thq-button-filled"
          >
            <span>
              {props.actionContent1 ?? (
                <Fragment>
                  <span className="about-us-text75 thq-body-small">
                    Open positions
                  </span>
                </Fragment>
              )}
            </span>
          </a>
        </div>
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="about-us-slider2 swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="about-us-slider-slide3 swiper-slide"
            >
              <div className="about-us-card15">
                <img
                  alt={props.member1Alt}
                  src={props.member1Src}
                  className="thq-img-ratio-1-1"
                />
                <div className="about-us-content16">
                  <div className="about-us-title15">
                    <span>
                      <span>Full name</span>
                      {props.member1 ?? (
                        <Fragment>
                          <span className="about-us-text74 thq-body-small">
                            Sabrina Jordan
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      <span>Job title</span>
                      {props.member1Job ?? (
                        <Fragment>
                          <span className="about-us-text77 thq-body-small">
                            Architect, Founder
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </span>
                </div>
                <div className="about-us-social-icons15">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="about-us-slider-slide4 swiper-slide"
            >
              <div className="about-us-card16">
                <img
                  alt={props.member2Alt}
                  src={props.member2Src}
                  className="thq-img-ratio-1-1"
                />
                <div className="about-us-content17">
                  <div className="about-us-title16">
                    <span>Full name</span>
                    <span>Job title</span>
                  </div>
                  <span>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </span>
                    {props.member2Content ?? (
                      <Fragment>
                        <span className="about-us-text67 thq-body-small">
                          Jane excels in analyzing data trends and patterns to
                          support strategic decision-making.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="about-us-social-icons16">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="about-us-slider-slide5 swiper-slide"
            >
              <div className="about-us-card17">
                <img
                  alt={props.member3Alt}
                  src={props.member3Src}
                  className="thq-img-ratio-1-1"
                />
                <div className="about-us-content18">
                  <div className="about-us-title17">
                    <span>
                      <span>Full name</span>
                      {props.member3 ?? (
                        <Fragment>
                          <span className="about-us-text71 thq-body-small">
                            Alex Johnson
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      <span>Job title</span>
                      {props.member3Job ?? (
                        <Fragment>
                          <span className="about-us-text59 thq-body-small">
                            Business Intelligence Specialist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </span>
                    {props.member3Content ?? (
                      <Fragment>
                        <span className="about-us-text57 thq-body-small">
                          Alex leverages data visualization techniques to
                          communicate key findings effectively.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="about-us-social-icons17">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="about-us-slider-slide6 swiper-slide"
            >
              <div className="about-us-card18">
                <img
                  alt={props.member4Alt}
                  src={props.member4Src}
                  className="thq-img-ratio-1-1"
                />
                <div className="about-us-content19">
                  <div className="about-us-title18">
                    <span>Full name</span>
                    <span>
                      <span>Job title</span>
                      {props.member4Job ?? (
                        <Fragment>
                          <span className="about-us-text64 thq-body-small">
                            Data Engineer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </span>
                </div>
                <div className="about-us-social-icons18">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="about-us-slider-slide7 swiper-slide"
            >
              <div className="about-us-card19">
                <img
                  alt={props.member5Alt}
                  src={props.member5Src}
                  className="thq-img-ratio-1-1"
                />
                <div className="about-us-content20">
                  <div className="about-us-title19">
                    <span>Full name</span>
                    <span>Job title</span>
                  </div>
                  <span>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </span>
                    {props.member5Content ?? (
                      <Fragment>
                        <span className="about-us-text76 thq-body-small">
                          Michael develops advanced algorithms to drive
                          predictive analytics and machine learning models.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="about-us-social-icons19">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="about-us-slider-slide8 swiper-slide"
            >
              <div className="about-us-card20">
                <img
                  alt={props.member6Alt}
                  src={props.member6Src}
                  className="thq-img-ratio-1-1"
                />
                <div className="about-us-content21">
                  <div className="about-us-title20">
                    <span>
                      <span>Full name</span>
                      {props.member6 ?? (
                        <Fragment>
                          <span className="about-us-text65 thq-body-small">
                            Emily Davis
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      <span>Job title</span>
                      {props.member6Job ?? (
                        <Fragment>
                          <span className="about-us-text73 thq-body-small">
                            Data Visualization Specialist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </span>
                    {props.member6Content ?? (
                      <Fragment>
                        <span className="about-us-text62 thq-body-small">
                          Emily creates visually engaging dashboards to present
                          data insights in a compelling way.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="about-us-social-icons20">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="about-us-slider-pagination2 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </div>
    </div>
  )
}

AboutUs.defaultProps = {
  member5Alt: 'Image of Michael Brown',
  member6Alt: 'Image of Emily Davis',
  member3Content: undefined,
  heading1: undefined,
  member3Job: undefined,
  member2: undefined,
  member4Alt: 'Image of Sarah Lee',
  member4: undefined,
  member6Src:
    'https://images.unsplash.com/photo-1530893608544-cd10fda1ac14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDI1MDUxNnw&ixlib=rb-4.0.3&q=80&w=1080',
  member6Content: undefined,
  member1Content: undefined,
  member4Job: undefined,
  member5Src:
    'https://images.unsplash.com/photo-1626967175524-c0bf5d61b21b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDI1MDUxNnw&ixlib=rb-4.0.3&q=80&w=1080',
  member6: undefined,
  member4Src:
    'https://images.unsplash.com/photo-1468218457742-ee484fe2fe4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDI1MDUxNnw&ixlib=rb-4.0.3&q=80&w=1080',
  member2Job: undefined,
  member2Content: undefined,
  member3Src:
    'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDI1MDUxNnw&ixlib=rb-4.0.3&q=80&w=1080',
  member2Src:
    'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDI1MDUxNnw&ixlib=rb-4.0.3&q=80&w=1080',
  member5Job: undefined,
  member3Alt: 'Image of Alex Johnson',
  member5: undefined,
  content11: undefined,
  member2Alt: 'Image of Jane Smith',
  member3: undefined,
  member1Alt: 'Image of John Doe',
  member1Src: '/20230920_095757~2-1400w.jpg',
  member4Content: undefined,
  member6Job: undefined,
  member1: undefined,
  actionContent1: undefined,
  member5Content: undefined,
  member1Job: undefined,
}

AboutUs.propTypes = {
  member5Alt: PropTypes.string,
  member6Alt: PropTypes.string,
  member3Content: PropTypes.element,
  heading1: PropTypes.element,
  member3Job: PropTypes.element,
  member2: PropTypes.element,
  member4Alt: PropTypes.string,
  member4: PropTypes.element,
  member6Src: PropTypes.string,
  member6Content: PropTypes.element,
  member1Content: PropTypes.element,
  member4Job: PropTypes.element,
  member5Src: PropTypes.string,
  member6: PropTypes.element,
  member4Src: PropTypes.string,
  member2Job: PropTypes.element,
  member2Content: PropTypes.element,
  member3Src: PropTypes.string,
  member2Src: PropTypes.string,
  member5Job: PropTypes.element,
  member3Alt: PropTypes.string,
  member5: PropTypes.element,
  content11: PropTypes.element,
  member2Alt: PropTypes.string,
  member3: PropTypes.element,
  member1Alt: PropTypes.string,
  member1Src: PropTypes.string,
  member4Content: PropTypes.element,
  member6Job: PropTypes.element,
  member1: PropTypes.element,
  actionContent1: PropTypes.element,
  member5Content: PropTypes.element,
  member1Job: PropTypes.element,
}

export default AboutUs
