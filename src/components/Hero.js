import React from 'react'
import '../App.css'
import Typography from '@mui/material/Typography';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const Hero = () => {
  return (
    <div id='hero'>
      <div id='hero-text-wrapper'>
        <Typography variant="h2">
          <b>Hi, I'm Tamika.</b>
        </Typography>

        <Typography variant="h5">
          I recently graduated with honours - Magna Cum Laude,
          and obtained a Bachelor’s of Science degree in Computer Science.
          I am an aspiring web developer who also has interests in...
          Learn more about my experience from my <b>resume</b>.
        </Typography>
        <br/>
        <Typography variant="h6">
          Let's Connect! <ArrowCircleRightOutlinedIcon sx={{marginBottom: '-5px'}}/>
        </Typography>
      </div>
    </div>
  )
}

export default Hero