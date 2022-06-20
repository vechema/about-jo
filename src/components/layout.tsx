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

  return (
    <Tabs value={currentPath} onChange={handleChange}>
      <Tab label="Home" value="/" to="/" component={GatsbyLink} />
      <Tab label="About" value="/about" to="/about" component={GatsbyLink} />
      <Tab label="Blog" value="/blog" to="/blog" component={GatsbyLink} />
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
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout