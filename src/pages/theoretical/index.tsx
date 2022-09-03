import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Typography from '@mui/material/Typography';
import TheoryNav from '../../components/theoryNav';
import { Box, List, ListItem } from '@mui/material';

const TheoreticalPage = ({ data, location }) => {

  const [open, setOpen] = React.useState(JSON.parse(window.localStorage.getItem('theoryNavOpen')));

  React.useEffect(() => {
    window.localStorage.setItem('theoryNavOpen', open);
  }, [open]);

  return (
    <Layout pageTitle="Thoughts" pagePath={location.pathname}>
      <>
        <TheoryNav open={open} setOpen={setOpen} />
        <Box sx={{ marginRight: open ? 23 : 5, transition: "margin 1s" }}>
          <Typography>Some pearls of wisdom that I try to code by</Typography>

          <Typography variant="h3">Non Functional Requirements</Typography>
          <List>
            <ListItem>Simplicity (Simple vs Easy)</ListItem>
            <ListItem>Maintainability</ListItem>
            <ListItem>Readability, explicit</ListItem>
            <ListItem>Testability</ListItem>
            <ListItem>Idempotency, Reversibility</ListItem>
            <ListItem>Proper abstaction, modularity, single responsibility, demeter, Composition over Inheritance, loose coupling</ListItem>
            <ListItem>Repeatability - Cattle, not pets, deterministic</ListItem>
          </List>

          <Typography variant='h3'>Functional Programming</Typography>
          <List>
            <ListItem>Data first, pure</ListItem>
            <ListItem>Immutability, static not dynamic, change is the root of all evil</ListItem>
            <ListItem>Lazy - derive vs denormalize</ListItem>
            <ListItem>Stateless</ListItem>
            <ListItem>Entity/Component/System</ListItem>
          </List>

          <Typography variant='h3'>Misc</Typography>
          <List>
            <ListItem>Problem first, solution after</ListItem>
            <ListItem>Strong opinions, weakly held</ListItem>
            <ListItem>Create new better, replace old later/maybe never</ListItem>
            <ListItem>Synchronous</ListItem>
            <ListItem>Measure everything</ListItem>
            <ListItem>Premature optimization - NO</ListItem>
            <ListItem>If it can happen, it will happen</ListItem>
          </List>
        </Box>
      </>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___posted_date, order: DESC}) {
      nodes {
        frontmatter {
          posted_date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default TheoreticalPage