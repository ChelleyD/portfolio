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
import TorrisTies from "../../images/programming-project-images/Torri's Ties.png"

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
    

const PP6 = () => {
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
        {/* `${handleClickOpen}info.projectNum`   {`#${item}`}  */}
        <CardActionArea className="card-wrapper btn-modal" onClick={handleClickOpen}> 
          <CardMedia
            component="img"
            height="245"
            // image="https://source.unsplash.com/random"
            image={TorrisTies}
            alt="random unsplash image"
            className="card-image"
          />

          <div className="overlay-right-slide">
            <div className="card-text">
              <Typography variant='body1'>Torri’s Ties</Typography>
              <Typography variant='caption text'>React</Typography>
            </div>
          </div>
        </CardActionArea>
      </Card>
      {/*  */}
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth='true'
        maxWidth='xl'
        scroll='paper'
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography variant='h4'>
            Torri’s Ties
          </Typography>
        </BootstrapDialogTitle>

        <DialogContent dividers>

          <Typography variant='h5'>Overview</Typography>
          <Divider variant="middle" />
          <Typography gutterBottom>
            blah blah blah
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Mauris rhoncus aenean vel elit scelerisque mauris. Sit amet justo donec enim diam vulputate ut. Urna id volutpat lacus laoreet. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Consectetur adipiscing elit pellentesque habitant. Enim nunc faucibus a pellentesque. Sollicitudin tempor id eu nisl nunc mi. Senectus et netus et malesuada fames ac turpis. Leo integer malesuada nunc vel risus commodo. Nunc lobortis mattis aliquam faucibus purus. Sem et tortor consequat id. Enim diam vulputate ut pharetra sit amet aliquam. Mauris rhoncus aenean vel elit. Enim diam vulputate ut pharetra sit amet aliquam.

In massa tempor nec feugiat nisl pretium fusce id. Ut diam quam nulla porttitor massa id neque. Tempus egestas sed sed risus pretium quam vulputate dignissim. Sed enim ut sem viverra aliquet eget. Commodo odio aenean sed adipiscing diam donec. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Cursus eget nunc scelerisque viverra mauris in aliquam. Elementum pulvinar etiam non quam lacus. Sit amet nisl purus in mollis nunc sed. Fermentum odio eu feugiat pretium nibh ipsum. Ultrices neque ornare aenean euismod elementum nisi quis. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Et netus et malesuada fames ac. Senectus et netus et malesuada fames. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque.

Pharetra convallis posuere morbi leo urna molestie. Et odio pellentesque diam volutpat commodo. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Augue interdum velit euismod in pellentesque. Ornare quam viverra orci sagittis eu volutpat odio facilisis. In cursus turpis massa tincidunt dui ut ornare lectus. Malesuada proin libero nunc consequat interdum varius sit. Sapien pellentesque habitant morbi tristique senectus et. Mauris a diam maecenas sed. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. At tempor commodo ullamcorper a. Dolor magna eget est lorem ipsum dolor sit amet. Scelerisque eu ultrices vitae auctor eu augue ut. At varius vel pharetra vel turpis nunc. Viverra maecenas accumsan lacus vel facilisis volutpat est velit.

Id leo in vitae turpis massa sed elementum. Duis ut diam quam nulla porttitor massa. Sit amet luctus venenatis lectus magna. Vitae purus faucibus ornare suspendisse sed. Varius vel pharetra vel turpis nunc eget. Scelerisque eu ultrices vitae auctor eu augue. Massa ultricies mi quis hendrerit dolor magna eget. Tortor pretium viverra suspendisse potenti nullam ac. Id consectetur purus ut faucibus pulvinar. Egestas congue quisque egestas diam in arcu. Quis lectus nulla at volutpat diam ut venenatis tellus in. Orci ac auctor augue mauris augue. Dolor sit amet consectetur adipiscing elit ut. At elementum eu facilisis sed.

Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Fermentum posuere urna nec tincidunt praesent semper. Rhoncus dolor purus non enim praesent elementum. Convallis a cras semper auctor neque. Ut sem viverra aliquet eget sit amet tellus. Iaculis urna id volutpat lacus laoreet non. Enim praesent elementum facilisis leo vel. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Diam maecenas sed enim ut sem viverra aliquet eget. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. At tempor commodo ullamcorper a lacus vestibulum sed. Ultrices gravida dictum fusce ut placerat orci.

Pulvinar sapien et ligula ullamcorper. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Eget duis at tellus at. Neque viverra justo nec ultrices dui sapien. Ac turpis egestas integer eget aliquet nibh. Nunc consequat interdum varius sit amet. Mi sit amet mauris commodo quis. Ut sem nulla pharetra diam sit amet nisl. Nam libero justo laoreet sit amet cursus. Nibh praesent tristique magna sit amet purus gravida.

Odio ut enim blandit volutpat maecenas volutpat blandit. Tristique senectus et netus et. Blandit turpis cursus in hac habitasse platea dictumst. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Tincidunt lobortis feugiat vivamus at augue eget arcu. Maecenas sed enim ut sem viverra aliquet eget sit amet. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Amet massa vitae tortor condimentum lacinia quis vel eros. Bibendum ut tristique et egestas quis ipsum suspendisse. Et tortor at risus viverra adipiscing at in tellus integer. Mauris pharetra et ultrices neque ornare. Fames ac turpis egestas integer eget. Volutpat diam ut venenatis tellus in metus vulputate eu.

Sodales ut eu sem integer vitae justo eget magna. Lectus magna fringilla urna porttitor rhoncus dolor purus. Ac felis donec et odio pellentesque. Enim ut sem viverra aliquet eget. Vel turpis nunc eget lorem. Maecenas pharetra convallis posuere morbi leo urna. Scelerisque in dictum non consectetur a. Hendrerit dolor magna eget est lorem ipsum dolor sit. Faucibus pulvinar elementum integer enim. Id eu nisl nunc mi ipsum. Aenean et tortor at risus viverra adipiscing. Sit amet massa vitae tortor condimentum. Turpis massa sed elementum tempus egestas sed sed risus pretium. Fusce ut placerat orci nulla pellentesque. Risus nullam eget felis eget nunc lobortis mattis. In vitae turpis massa sed elementum.

Elementum sagittis vitae et leo. Etiam sit amet nisl purus. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Imperdiet sed euismod nisi porta. Purus viverra accumsan in nisl nisi. Dignissim sodales ut eu sem integer vitae justo. At risus viverra adipiscing at in. Sagittis vitae et leo duis ut. Aliquet sagittis id consectetur purus ut faucibus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Senectus et netus et malesuada fames ac turpis. Viverra justo nec ultrices dui sapien eget mi. Viverra mauris in aliquam sem fringilla ut. Neque ornare aenean euismod elementum nisi quis. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque.

Id faucibus nisl tincidunt eget. Ut placerat orci nulla pellentesque dignissim. Amet mattis vulputate enim nulla. Nisl vel pretium lectus quam id leo in vitae. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Sagittis vitae et leo duis ut diam quam nulla porttitor. Semper auctor neque vitae tempus quam pellentesque. Tellus orci ac auctor augue mauris augue neque gravida in. Aliquam vestibulum morbi blandit cursus risus at ultrices. Odio ut sem nulla pharetra diam sit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Leo a diam sollicitudin tempor. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Molestie ac feugiat sed lectus. Velit egestas dui id ornare arcu odio ut sem nulla. Volutpat est velit egestas dui id. Sed viverra tellus in hac habitasse. Risus feugiat in ante metus dictum at tempor commodo. Vivamus arcu felis bibendum ut.
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

export default PP6