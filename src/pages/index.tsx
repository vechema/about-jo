import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Box, List, ListItem, Typography } from '@mui/material'

const IndexPage = ({ location }) => {
  return (
    <Layout pageTitle="About" pagePath={location.pathname}>
      <>
        <Typography variant='h5'>I enjoy solving problems and making future problems easier to solve.</Typography>
        <Box padding={2} />
        <Typography variant='h6'>Hobbies</Typography>
        <List>
          <ListItem>Coding</ListItem>
          <ListItem>Baking</ListItem>
          <ListItem>Video Games</ListItem>
          <ListItem>D&D</ListItem>
          <ListItem>Knit & Crochet</ListItem>
        </List>
      </>
    </Layout>
  )
}

export default IndexPage