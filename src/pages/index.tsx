import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = ({ location }) => {
  return (
    <Layout pageTitle="Home Page" pagePath={location.pathname}>
      <>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/dog.jpg"
        />
      </>
    </Layout>
  )
}

export default IndexPage