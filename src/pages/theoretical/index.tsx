import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Typography from '@mui/material/Typography';
import TheoryNav from '../../components/theoryNav';
import { Box, Link, List, ListItem } from '@mui/material';

const TheoreticalPage = ({ data, location }) => {

  let tempOpen = true;
  if (typeof window !== `undefined`) {
    tempOpen = JSON.parse(window?.localStorage.getItem('theoryNavOpen'));
  }

  const [open, setOpen] = React.useState(tempOpen);

  React.useEffect(() => {
    window?.localStorage.setItem('theoryNavOpen', open);
  }, [open]);

  return (
    <Layout pageTitle="Thoughts" pagePath={location.pathname}>
      <>
        <TheoryNav open={open} setOpen={setOpen} />
        <Box sx={{ marginRight: open ? 23 : 5, transition: "margin 1s" }}>
          <Typography>Some pearls of wisdom that I try to code by</Typography>

          <Typography variant="h3">Non Functional Requirements</Typography>
          <List>
            <ListItem>
              <Link href="/theoretical/simplicity">Simplicity (Simple vs Easy)</Link>
            </ListItem>
            <ListItem>Maintainability</ListItem>
            <ListItem>Readability, explicit</ListItem>
            <ListItem>Testability</ListItem>
            <ListItem>Idempotency, Reversibility</ListItem>
            <ListItem>Proper abstaction, modularity, single responsibility, demeter, Composition over Inheritance, loose coupling</ListItem>
            <ListItem>Repeatability - Cattle, not pets, deterministic</ListItem>
            <ListItem>Developer Experience</ListItem>
            <ListItem>Limited Blast Radius</ListItem>
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
            <ListItem>Synchronous & Undistributed</ListItem>
            <ListItem>Measure everything</ListItem>
            <ListItem>Premature optimization - NO</ListItem>
            <ListItem>If it can happen, it will happen</ListItem>
            <ListItem>Revert, don't hot patch</ListItem>
            <ListItem>Types of data - historical, current, event</ListItem>
            <ListItem>Always save sent & recieved message. Denormalize out what will be used</ListItem>
            <ListItem>Ruthless prioritization, MVP, tiny stories</ListItem>
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