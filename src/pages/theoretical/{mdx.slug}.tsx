import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout, { TheoryNavOpen } from '../../components/layout'
import TheoryNav from '../../components/theoryNav'
import { Typography } from '@mui/material'
import { Box } from '@mui/material';

const TheoryPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  const [open, setOpen] = React.useState(true);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <>
        <TheoryNav
          theoryTitle={data.mdx.frontmatter.title}
          open={open}
          setOpen={setOpen}
        />
        <Box sx={{ marginRight: open ? 25 : 7, transition: "margin 1s" }}>
          <Typography>Posted: {data.mdx.frontmatter.posted_date}</Typography>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          <Typography>
            Photo Credit:{" "}
            <a href={data.mdx.frontmatter.hero_image_credit_link}>
              {data.mdx.frontmatter.hero_image_credit_text}
            </a>
          </Typography>
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
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default TheoryPost