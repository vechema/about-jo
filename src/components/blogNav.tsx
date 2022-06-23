import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import PetsIcon from '@mui/icons-material/Pets';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import { SvgIconComponent } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

const BlogNav = ({ blogTitle }: { blogTitle: string }) => {

  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            icon
          }
          id
          slug
        }
      }
    }
  `)

  const icons: Record<string, SvgIconComponent> = {
    bedroomBaby: BedroomBabyIcon,
    pets: PetsIcon,
    filterVintage: FilterVintageIcon
  }

  return (
    <Drawer
      variant="persistent"
      open={true}
      anchor="right"
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {data.allMdx.nodes.map((node, index) => {
            const IconComponent = icons[node.frontmatter.icon]

            const selectedBlog = blogTitle === node.frontmatter.title ? { backgroundColor: grey[200] } : {};
            return (
              <ListItem key={node.slug} disablePadding sx={selectedBlog}>
                <ListItemButton LinkComponent={Link} to={`/blog/${node.slug}`}>
                  <ListItemIcon>
                    <IconComponent />
                  </ListItemIcon>
                  <ListItemText primary={node.frontmatter.title} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Drawer>
  )
}

export default BlogNav