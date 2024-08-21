import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import TopNavigation from '../components/top-navigation'
import Header from '../components/header'
import MarketEdge from '../components/market-edge'
import Values from '../components/values'
import AboutUs from '../components/about-us'
import ContactInfo from '../components/contact-info'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Sophisticated Nutritious Hawk</title>
        <meta property="og:title" content="Sophisticated Nutritious Hawk" />
      </Helmet>
      <TopNavigation logoSrc="/final-1400w.png"></TopNavigation>
      <Header></Header>
      <MarketEdge
        feature1Title1={
          <Fragment>
            <span className="home-feature1-title thq-heading-3">
              <span>Customized Data</span>
              <br></br>
              <span>Solutions</span>
            </span>
          </Fragment>
        }
      ></MarketEdge>
      <Values
        feature1Title={
          <Fragment>
            <span className="home-text13 thq-heading-2">
              Empowered &amp; Accountable
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text14 thq-heading-2">Put People First</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text15 thq-heading-2">
              Earn Respect &amp; Trust
            </span>
          </Fragment>
        }
        feature1Title3={
          <Fragment>
            <span className="home-text16 thq-heading-2">
              Elevate our Communities
            </span>
          </Fragment>
        }
        feature2Title2={
          <Fragment>
            <span className="home-text17 thq-heading-2">
              Excellence with Humility
            </span>
          </Fragment>
        }
        feature3Title4={
          <Fragment>
            <span className="home-text18 thq-heading-2">
              Evolving &amp; Innovative
            </span>
          </Fragment>
        }
        feature3Title6={
          <Fragment>
            <span className="home-text19 thq-heading-2">
              Embrace an Ownership Mentality
            </span>
          </Fragment>
        }
        feature3Title42={
          <Fragment>
            <span className="home-text20 thq-heading-2">
              Equity and Inclusion
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text21 thq-body-small">
              autonomy, authority, enabled
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text22 thq-body-small">
              employee growth, happiness, and support
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text23 thq-body-small">
              act with integrity and transparency
            </span>
          </Fragment>
        }
        feature1Description3={
          <Fragment>
            <span className="home-text24 thq-body-small">
              mindfully choose our business and giving partners to positively
              impact the world
            </span>
          </Fragment>
        }
        feature2Description2={
          <Fragment>
            <span className="home-text25 thq-body-small">
              be exceptional and be humble
            </span>
          </Fragment>
        }
        feature3Description4={
          <Fragment>
            <span className="home-text26 thq-body-small">
              embrace learning and growth
            </span>
          </Fragment>
        }
        feature3Description6={
          <Fragment>
            <span className="home-text27 thq-body-small">
              successes and challenges faced together
            </span>
          </Fragment>
        }
        feature3Description42={
          <Fragment>
            <span className="home-text28 thq-body-small">
              embrace diversity and lived experiences
            </span>
          </Fragment>
        }
      ></Values>
      <AboutUs
        member1={
          <Fragment>
            <span className="home-text29 thq-body-small">Sabrina Jordan</span>
          </Fragment>
        }
        member2={
          <Fragment>
            <span className="home-text30 thq-body-small">Jane Smith</span>
          </Fragment>
        }
        member3={
          <Fragment>
            <span className="home-text31 thq-body-small">Alex Johnson</span>
          </Fragment>
        }
        member4={
          <Fragment>
            <span className="home-text32 thq-body-small">Sarah Lee</span>
          </Fragment>
        }
        member5={
          <Fragment>
            <span className="home-text33 thq-body-small">Michael Brown</span>
          </Fragment>
        }
        member6={
          <Fragment>
            <span className="home-text34 thq-body-small">Emily Davis</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text35 thq-heading-2">
              Meet our team of employee-owners
            </span>
          </Fragment>
        }
        content11={
          <Fragment>
            <span className="home-text36 thq-body-small">
              Join our team and own your career!
            </span>
          </Fragment>
        }
        member1Job={
          <Fragment>
            <span className="home-text37 thq-body-small">
              Architect, Founder
            </span>
          </Fragment>
        }
        member2Job={
          <Fragment>
            <span className="home-text38 thq-body-small">Data Analyst</span>
          </Fragment>
        }
        member3Job={
          <Fragment>
            <span className="home-text39 thq-body-small">
              Business Intelligence Specialist
            </span>
          </Fragment>
        }
        member4Job={
          <Fragment>
            <span className="home-text40 thq-body-small">Data Engineer</span>
          </Fragment>
        }
        member5Job={
          <Fragment>
            <span className="home-text41 thq-body-small">
              Machine Learning Engineer
            </span>
          </Fragment>
        }
        member6Job={
          <Fragment>
            <span className="home-text42 thq-body-small">
              Data Visualization Specialist
            </span>
          </Fragment>
        }
        actionContent1={
          <Fragment>
            <span className="home-text43 thq-body-small">Open positions</span>
          </Fragment>
        }
        member1Content={
          <Fragment>
            <span className="home-text44 thq-body-small">
              Sabrina is a self-driven futurist and strategist with over a
              decade of modern data platform and business intelligence
              experience. She is highly motivated to build strong organizational
              relationships, uncover efficiencies, and deliver multi-faceted
              technology projects that exceed expectations. In addition, she
              focuses on meeting tight deadlines and applying creative and
              elegant solutions to organizational challenges. Sabrina’s
              technical skillset combined with her ability to collaborate with
              business executives &amp; stakeholders around driving actionable
              insight, data strategy, processes and project management have
              allowed her to complete highly successful engagements.
            </span>
          </Fragment>
        }
        member2Content={
          <Fragment>
            <span className="home-text45 thq-body-small">
              Jane excels in analyzing data trends and patterns to support
              strategic decision-making.
            </span>
          </Fragment>
        }
        member3Content={
          <Fragment>
            <span className="home-text46 thq-body-small">
              Alex leverages data visualization techniques to communicate key
              findings effectively.
            </span>
          </Fragment>
        }
        member4Content={
          <Fragment>
            <span className="home-text47 thq-body-small">
              Sarah ensures data pipelines are optimized for efficient
              processing and analysis.
            </span>
          </Fragment>
        }
        member5Content={
          <Fragment>
            <span className="home-text48 thq-body-small">
              Michael develops advanced algorithms to drive predictive analytics
              and machine learning models.
            </span>
          </Fragment>
        }
        member6Content={
          <Fragment>
            <span className="home-text49 thq-body-small">
              Emily creates visually engaging dashboards to present data
              insights in a compelling way.
            </span>
          </Fragment>
        }
      ></AboutUs>
      <ContactInfo></ContactInfo>
      <Footer
        link1={
          <Fragment>
            <span className="home-text50 thq-body-small">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text51 thq-body-small">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text52 thq-body-small">Values</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text53 thq-body-small">Contact</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text54 thq-body-small">Home</span>
          </Fragment>
        }
      ></Footer>
    </div>
  )
}

export default Home
