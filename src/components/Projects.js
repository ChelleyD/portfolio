import React from 'react'
import '../App.css'
import { Typography } from '@mui/material';
import ColorTabs from './ColorTabs';

const Projects = () => {
  return (
    <div id='projects'>
        <Typography variant='h3' gutterBottom='true'>
            Projects
        </Typography>

        <Typography variant='body1' gutterBottom='true' id='before-tabs'>
            Click into each project to learn more about its creation, goal and current version.
        </Typography>

        <ColorTabs/>
    </div>
  )
}

export default Projects;