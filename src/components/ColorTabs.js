import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography } from '@mui/material';
import ProgrammingProjectInfo from './Projects/ProgrammingProjectsInfo';
import NonProgrammingProjectInfo from './Projects/NonProgrammingProjectsInfo';
import Divider from '@mui/material/Divider';
// 
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
// 
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
//


export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //


  const PPI = ProgrammingProjectInfo.map((info) => 
    <Grid sm={12} md={6} lg={4} xl={2}>
      {/* on click of ActionArea, open modal */}
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea className="card-wrapper btn-modal" onClick={handleClickOpen}> 
          <CardMedia
            component="img"
            height="245"
            // image="https://source.unsplash.com/random"
            image={info.previewImg}
            alt="random unsplash image"
            className="card-image"
          />

          <div className="overlay-right-slide">
            <div className="card-text">
              <Typography variant='body1'>{info.projectName}</Typography>
              <Typography variant='caption text'>{info.languages}</Typography>
            </div>
          </div>
        </CardActionArea>
      </Card>
      {/*  */}
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ width: '100rem' }}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography variant='h4'>
            {info.projectName}
          </Typography>
        </BootstrapDialogTitle>

        <DialogContent dividers>

          <Typography variant='h5'>Overview</Typography>
          <Divider variant="middle" />
          <Typography gutterBottom>
            {info.overview}
          </Typography>

          <Typography variant='h5'>Problem</Typography>
          <Typography gutterBottom>
            {info.problem}
          </Typography>

          <Typography variant='h5'>Solution</Typography>
          <Typography gutterBottom>
            {info.solution}
          </Typography>

          <Typography variant='h5'>Final Product</Typography>
          <Typography gutterBottom>
            {/* {info.finalProduct} */}
          </Typography>

          <Typography variant='h5'>Key Takeaways</Typography>
          <Typography gutterBottom>
            {info.keyTakeaways}
          </Typography>

          <Typography variant='h5'>Process</Typography>
          <Typography gutterBottom>
            {info.process}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} sx={{color: 'red'}}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    {/*  */}
    </Grid>

    //
    
    //
  );

  const NPPI = NonProgrammingProjectInfo.map((info) => 
  <Grid sm={12} md={6} lg={4} xl={2}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea className="card-wrapper" onClick={handleClickOpen}>
        <CardMedia
          component="img"
          height="245"
          // image="https://source.unsplash.com/random"
          image={info.previewImg}
          alt="random unsplash image"
          className="card-image"
        />

        <div className="overlay-right-slide">
          <div className="card-text">
            <Typography variant='body1'>{info.projectName}</Typography>
            <Typography variant='caption text'>{info.subject}</Typography>
          </div>
        </div>
      </CardActionArea>
    </Card>

    {/*  */}
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography>
            {info.projectName}
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    {/*  */}
  </Grid>
);


  return (
    <Box sx={{ width: '80%', typography: 'body1', margin: 'auto'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="secondary" indicatorColor="secondary" centered>
            <Tab label="Programming" value="1" sx={{textTransform: 'none', typography: 'body1'}}/>
            <Tab label="Non-Programming" value="2" sx={{textTransform: 'none', typography: 'body1'}}/>
          </TabList>
        </Box>

        {/* programming projects */}
        <TabPanel value="1" centered>
          <Grid container spacing={5}> {/* at smaller screens offset??? */}
            {PPI}
          </Grid>
        </TabPanel>

        {/* non-programming projects */}
        <TabPanel value="2">
          <Grid container spacing={5}>
            {NPPI}
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
