import * as React from 'react'
import Layout from '../components/layout'

const PracticalPage = ({ location }) => {
  return (
    <Layout pageTitle="Real World Experience" pagePath={location.pathname}>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export default PracticalPage