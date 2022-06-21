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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const BlogNav = () => {

  const data = useStaticQuery(graphql`
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
  `)

  return (
    <Drawer
      variant="persistent"
      open={true}
      anchor="right"
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {data.allMdx.nodes.map((node, index) => (
            <ListItem key={node.slug} disablePadding>
              <ListItemButton LinkComponent={Link} to={`/blog/${node.slug}`}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={node.frontmatter.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default BlogNav