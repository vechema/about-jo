import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

function NavTabs({ currentPath, setCurrentPath }: { currentPath: string, setCurrentPath: Function }) {
  const handleChange = (event: React.SyntheticEvent, newPath: string) => {
    setCurrentPath(newPath);
  };

  return (
    <Tabs value={currentPath} onChange={handleChange}>
      <Tab label="Home" value="/" to="/" component={Link} />
      <Tab label="About" value="/about" to="/about" component={Link} />
      <Tab label="Blog" value="/blog" to="/blog" component={Link} />
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
      <Typography variant="h2">{siteName}</Typography>
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