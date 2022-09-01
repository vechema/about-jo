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
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import CircleIcon from '@mui/icons-material/Circle';
import ConstructionIcon from '@mui/icons-material/Construction';
import EditOffIcon from '@mui/icons-material/EditOff';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import StorageIcon from '@mui/icons-material/Storage';
import MenuIcon from '@mui/icons-material/Menu';
import { SvgIconComponent } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { IconButton } from '@mui/material';

const TheoryNav = ({ theoryTitle }: { theoryTitle: string }) => {

  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {fields: frontmatter___title, order: ASC}) {
        nodes {
          frontmatter {
            posted_date(formatString: "MMMM D, YYYY")
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
    chromeReaderMode: ChromeReaderModeIcon,
    circle: CircleIcon,
    construction: ConstructionIcon,
    editOff: EditOffIcon,
    factCheck: FactCheckIcon,
    storage: StorageIcon,
    reportProblem: ReportProblemIcon
  }

  const [open, setOpen] = React.useState(true);

  return (
    <Drawer
      variant='permanent'
      open={true}
      anchor="right"
      PaperProps={{
        sx: {
          width: open ? 200 : 55,
          transition: "width 1s",
          whiteSpace: 'nowrap',
          overflowX: 'hidden' // This is supposed to remove the horizontal scroll bar
        },
        elevation: 3
      }}
    >
      <Box sx={{ p: 1, display: "flex", justifyContent: "flex-end" }}>
        <IconButton
          onClick={() => { setOpen((prevOpen) => !prevOpen) }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {data.allMdx.nodes.map((node, index) => {
            const IconComponent = icons[node.frontmatter.icon]

            const selectedTheory = theoryTitle === node.frontmatter.title ? { backgroundColor: grey[200] } : {};
            return (
              <ListItem key={node.slug} disablePadding sx={selectedTheory}>
                <ListItemButton LinkComponent={Link} to={`/theoretical/${node.slug}`}>
                  <ListItemIcon>
                    <IconComponent />
                  </ListItemIcon>
                  <ListItemText primary={node.frontmatter.title} />
                  {/* <ListItemText primary={open && node.frontmatter.title || '‎ '} /> */}
                  {/* {open && <ListItemText primary={node.frontmatter.title} />} */}
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Drawer>
  )
}

export default TheoryNav