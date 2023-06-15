import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout, { TheoryNavOpen } from '../../components/layout'
import TheoryNav from '../../components/theoryNav'
import { Typography } from '@mui/material'
import { Box } from '@mui/material';

const TheoryPost = ({ data, location }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  let tempOpen = true;
  if (typeof window !== `undefined`) {
    tempOpen = JSON.parse(window?.localStorage.getItem('theoryNavOpen'));
  }

  const [open, setOpen] = React.useState(tempOpen);

  React.useEffect(() => {
    window?.localStorage.setItem('theoryNavOpen', open);
  }, [open]);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title} pagePath={location.pathname}>
      <>
        <TheoryNav
          theoryTitle={data.mdx.frontmatter.title}
          open={open}
          setOpen={setOpen}
        />
        <Typography variant='h3'>{data.mdx.frontmatter.title}</Typography>
        <Box sx={{ marginRight: open ? 25 : 7, transition: "margin 1s" }}>
          <Typography>Posted: {data.mdx.frontmatter.posted_date}</Typography>
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </Box>
      </>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        posted_date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default TheoryPost