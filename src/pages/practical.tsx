import { Typography } from '@mui/material'
import * as React from 'react'
import Layout from '../components/layout'

const PracticalPage = ({ location }) => {
  return (
    <Layout pageTitle="Real World Experience" pagePath={location.pathname}>
      <Typography>Hi there! I'm the proud creator of this site, which I built with Gatsby.</Typography>
    </Layout>
  )
}

export default PracticalPage