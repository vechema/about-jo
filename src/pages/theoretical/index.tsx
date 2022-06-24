import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Typography from '@mui/material/Typography';
import TheoryNav from '../../components/theoryNav';

const TheoreticalPage = ({ data, location }) => {
  return (
    <Layout pageTitle="Thoughts" pagePath={location.pathname}>
      <>
        <TheoryNav />
        <Typography>Some pearls of wisdom that I try to code by</Typography>
      </>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default TheoreticalPage