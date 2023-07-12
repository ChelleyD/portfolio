import React from 'react'
import '../App.css'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

//
const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#E0E3E7',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': 'white',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&:before, &:after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&:before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });
//

const Contact = () => {
    const outerTheme = useTheme();

  return (
    <div id='contact'>
        <Typography variant='h3' gutterBottom='true'>
            Contact
        </Typography>

        <Stack direction="row" spacing={2} sx={{justifyContent: 'center', alignItems: 'center'}}>
          <a href='https://www.linkedin.com/in/tamika-dantes' target='_blank' rel="noreferrer" className='link'>
            <LinkedInIcon fontSize='large' id='before-form'/>
          </a>

          <a href='https://github.com/ChelleyD' target='_blank' rel="noreferrer" className='link'>
            <GitHubIcon fontSize='large' id='before-form'/>
          </a>

          <a href='mailto: tamika.dantes@gmail.com' target='_blank' rel="noreferrer" className='link'>
            <EmailIcon fontSize='large' id='before-form'/>
          </a>
            
            {/* <Typography variant='body1' gutterBottom='true' id='before-form'>
                LinkedIn
            </Typography>

            <Typography variant='body1' gutterBottom='true' id='before-form'>
                GitHub
            </Typography>

            <Typography variant='body1' gutterBottom='true' id='before-form'>
                Email 
            </Typography> */}
        </Stack>

        {/* make box smaller based on screen size */}
    <Box
      component="form"
      sx={{margin: 'auto'}}
      noValidate
      autoComplete="off"
      className='form-section'
    >
        <Stack divider={<Divider orientation="vertical" flexItem/>} direction="column" justifyContent="center" alignItems="center" spacing={3}> 
            <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" InputLabelProps={{sx: {color: 'white'}, }} inputProps={{sx: {color: 'white' }, }}/>
                <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" InputLabelProps={{sx: {color: 'white'}, }} inputProps={{sx: {color: 'white' }, }}/>
                <TextField fullWidth id="outlined-basic" label="Message" variant="outlined" multiline rows={4} InputLabelProps={{sx: {color: 'white'}, }} inputProps={{sx: {color: 'white' }, }}/>
            </ThemeProvider>
            <Button variant="contained"  color="secondary" sx={{ textTransform: 'none', typography: 'body1' }} onClick={() => {alert('clicked');}}>Submit</Button>
        </Stack>
    </Box>
        
    </div>
  )
}

export default Contact