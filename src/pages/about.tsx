import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = ({ location }) => {
  return (
    <Layout pageTitle="About Me" pagePath={location.pathname}>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export default AboutPage