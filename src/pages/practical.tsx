import { Grid, Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box';
import { purple } from '@mui/material/colors';
import * as React from 'react'
import Layout from '../components/layout'

const PracticalPage = ({ location }) => {
  const theme = useTheme();
  console.log(theme.palette.primary)
  return (
    <Layout pageTitle="Real World Experience" pagePath={location.pathname}>
      <Box sx={{
        '& .MuiTypography-h3': {
          color: theme.palette.primary.main,
          textTransform: "uppercase"
        }
      }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography>
              Self-motivated, persistent software engineer dedicated to creating products that solve problems and are easy to use, maintain and grow.
              Comprehensive knowledge of framework development, enterprise architecture, and web applications.
              Critical thinker seeking a position that prioritizes innovation, creativity, and continuing education
            </Typography>

            <Typography variant="h3">Experience</Typography>
            <Typography variant="h4">WeInfuse - Austin, TX</Typography>
            <Typography variant="h5">Lead Software Engineer</Typography>
            <Typography variant="h6">October 2021 - Present</Typography>
            <Typography>
              Lead architect and develop of greenfield medical claims project
            </Typography>

            <Typography variant="h5">Senior Software Engineer</Typography>
            <Typography variant="h6">July 2021 - October 2021</Typography>
            <Typography>
              Improved existing app
            </Typography>
            <Typography>
              Modularized and refactor develop seed data to decrease developer manual setup and increase repeatability across the team
            </Typography>

            <Typography variant="h4">PayPal - Austin, TX</Typography>
            <Typography variant="h5">Senior Software Engineer</Typography>
            <Typography variant="h6">May 2018 - July 2021</Typography>
            <Typography>
              Developed Spring Boot based framework that is the backbone of 1500+ microserviecs that process 15 billion+ requests a day
            </Typography>
            <Typography>
              Enhanced observability and monitoring in distributed system
            </Typography>
            <Typography>
              Saved $3 million by reducing cpu usage
            </Typography>

            <Typography variant="h5">Software Quality Engineer</Typography>
            <Typography variant="h6">August 2016 - May 2018</Typography>
            <Typography>
              Tested command line tools, web apps, and mid-tier services
            </Typography>
            <Typography>
              Performed white/black box, exploratory, unit, integration, and functional testing
            </Typography>
            <Typography>
              Created meaningful, automated tests focused on use cases and user experience
            </Typography>

            <Typography variant="h4">University of Texas - Austin, TX</Typography>
            <Typography variant="h5">Teaching Assistant</Typography>
            <Typography variant="h6">August 2013 - May 2016</Typography>
            <Typography>
              Software Design and Implementation I & II: C, C++, Java, Data Structures, OOP
            </Typography>
            <Typography>
              Led weekly lab sessions teaching coding and assisting students
            </Typography>
            <Typography>
              Automated grading of student assignments
            </Typography>

            <Typography variant="h3">Education</Typography>
            <Typography variant="h4">University of Texas - Austin, TX</Typography>
            <Typography variant="h5">Masters of Science, Electrical Engineering</Typography>
            <Typography variant="h6">May 2016</Typography>
            <Typography>
              Technical Area: Software Engineering
            </Typography>
            <Typography>
              GPA: 3.8/4.0
            </Typography>

            <Typography variant="h5">Bachelor of Science, Biomedical Engineering</Typography>
            <Typography variant="h6">May 2014</Typography>
            <Typography>
              Technical Area: Computational Biomedical Engineering, Electrical Engineering
            </Typography>
            <Typography>
              Overall GPA: 3.81/4.0, Major GPA: 3.89/4.0
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h3">Skills</Typography>
            <Typography variant="h4">Languages</Typography>
            <Typography variant="h5">
              Java, Python, Bash, Javascript, Rust, C, C++
            </Typography>
            <Typography variant="h4">Tools</Typography>
            <Typography variant="h5">
              Docker, Git, Jenkins, CI, Maven, Google Cloud Platform, Micrometer, JFR, JMH, JUnit, TestNG
            </Typography>
            <Typography variant="h4">Paradigms</Typography>
            <Typography variant="h5">
              Object Oriented Programming, Functional Programming, Test Driven Development, Agile
            </Typography>
            <Typography variant="h4">Miscellanous</Typography>
            <Typography variant="h5">
              Spring Boot, OpenTelemetry, REST, Batch, Batch Scheduling
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Layout >
  )
}

export default PracticalPage