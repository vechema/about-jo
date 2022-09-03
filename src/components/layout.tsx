import * as React from 'react'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReactLink from '@mui/material/Link'
import { IconButton } from '@mui/material';

function NavTabs({ currentPath, setCurrentPath }: { currentPath: string, setCurrentPath: Function }) {
  const handleChange = (event: React.SyntheticEvent, newPath: string) => {
    setCurrentPath(newPath);
  };

  const indexOfSecondSlash = currentPath.indexOf("/", 1)
  const substringEndIndex = indexOfSecondSlash > 0 ? indexOfSecondSlash : currentPath.length;
  const path = currentPath.substring(0, substringEndIndex);

  return (
    <Tabs value={path} onChange={handleChange}>
      <Tab label="About" value="/" to="/" component={GatsbyLink} />
      <Tab label="Practical" value="/practical" to="/practical" component={GatsbyLink} />
      <Tab label="Theoretical" value="/theoretical" to="/theoretical" component={GatsbyLink} />
    </Tabs>
  );
}

const Layout = ({ pageTitle, pagePath, children }: { pageTitle: string, pagePath: string, children: JSX.Element }) => {
  const [currentPath, setCurrentPath] = React.useState(pagePath);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const siteName = data.site.siteMetadata.title;

  return (
    <div>
      <title>{pageTitle} | {siteName}</title>
      <Toolbar>
        <Typography variant="h2">{siteName}</Typography>
        <ReactLink href='https://github.com/vechema'>
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </ReactLink>
        <ReactLink href='https://www.linkedin.com/in/jocelyn-egner-8287708a/'>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
        </ReactLink>
      </Toolbar>
      <NavTabs
        currentPath={currentPath}
        setCurrentPath={setCurrentPath}
      />
      <main>
        <Box sx={{ p: 2 }}>
          {children}
        </Box>
      </main>
    </div>
  )
}

export default Layout