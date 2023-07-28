import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CalcDatabase from '../../images/non-programming-project-images/Calculus 3 Database Management.png'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
    

const NPP1 = () => {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
      {/* on click of ActionArea, open modal */}
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea className="card-wrapper btn-modal" onClick={handleClickOpen}> 
          <CardMedia
            component="img"
            height="245"
            // image="https://source.unsplash.com/random"
            image={CalcDatabase}
            alt="random unsplash image"
            className="card-image"
          />

          <div className="overlay-right-slide">
            <div className="card-text">
              <Typography variant='body1'>Calculus 3 Database Management</Typography>
              <Typography variant='caption text'>Calculus 3</Typography>
            </div>
          </div>
        </CardActionArea>
      </Card>
      
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{ width: '100vw' }}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography variant='h4'>
            Calculus 3 Database Management
          </Typography>
        </BootstrapDialogTitle>

        <DialogContent dividers>

          <Typography variant='h5'>Overview</Typography>
          <Divider variant="middle" />
          <Typography gutterBottom>
            blah blah blah
          </Typography>

          <Typography variant='h5'>Problem</Typography>
          <Typography gutterBottom>
            blah blah blah
          </Typography>

          <Typography variant='h5'>Solution</Typography>
          <Typography gutterBottom>
            blah blah blah
          </Typography>

          <Typography variant='h5'>Final Product</Typography>
          <Typography gutterBottom>
            blah blah blah
          </Typography>

          <Typography variant='h5'>Key Takeaways</Typography>
          <Typography gutterBottom>
            blah blah blah
          </Typography>

          <Typography variant='h5'>Process</Typography>
          <Typography gutterBottom>
            blah blah blah
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}

export default NPP1