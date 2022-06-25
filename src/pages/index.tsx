import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Typography } from '@mui/material'

const IndexPage = ({ location }) => {
  return (
    <Layout pageTitle="About" pagePath={location.pathname}>
      <>
        <Typography>I enjoy coding to solve problems and make future problems easier to solve</Typography>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/dog.jpg"
        />
      </>
    </Layout>
  )
}

export default IndexPage