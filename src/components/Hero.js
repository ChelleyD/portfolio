import React from 'react'
import '../App.css'
import Typography from '@mui/material/Typography';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { HashLink as Link } from 'react-router-hash-link';
import Resume from '../documents/Resume.pdf';

// home
const Hero = () => {
  return (
    <div id='home'>
      <div id='hero-text-wrapper'>
        <Typography variant="h2">
          <b>Hi, I'm Tamika.</b>
        </Typography>

        <Typography variant="h5">
          I recently graduated with honours - Magna Cum Laude,
          and obtained a Bachelor’s of Science degree in Computer Science.
          I am an aspiring web developer who also has interests in...
          Learn more about my experience from my 
          {/* update resume file */}
          <a href={Resume} download='Tamika Dantes Resume' className='link'> 
            <b> resume</b>
          </a>.
        </Typography>
        <br/>
        <Link to='#contact' smooth className='link'>
          <Typography variant="h6">
            Let's Connect! <ArrowCircleRightOutlinedIcon sx={{marginBottom: '-5px'}}/>
          </Typography>
        </Link>
      </div>
    </div>
  )
}

export default Hero