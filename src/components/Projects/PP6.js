import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
// import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TorrisTies from "../../images/programming-project-images/Torri's Ties.png";
// import TestImg from "../../images/programming-project-images/regex-process-images/RE 1.png";
// import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
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
            position: "absolute",
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
      <Card sx={{ width: 345 }}>
        {/* `${handleClickOpen}info.projectNum`   {`#${item}`}  */}
        <CardActionArea
          className="card-wrapper btn-modal"
          onClick={handleClickOpen}
        >
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
              <Typography variant="body1">Torri’s Ties</Typography>
              <Typography variant="caption text">React</Typography>
            </div>
          </div>
        </CardActionArea>
      </Card>
      {/*  */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth="true"
        maxWidth="md"
        scroll="paper"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Typography variant="h4">
            <b>Torri’s Ties</b>
          </Typography>
          <Typography>
            <b>Timeline:</b> in progress
          </Typography>
          <Typography>
            <b>Languages:</b> React
          </Typography>
          <Typography>
            <b>Roles:</b> UI Designer | Front End Developer | Project Manager
          </Typography>
          <Typography>
            <b>Tools:</b> Adobe Xd | Visual Studio Code | GitHub
          </Typography>
        </BootstrapDialogTitle>

        <DialogContent dividers>
          {/* new section */}
          <div>
            <Typography variant="h5" gutterBottom>
              <b>Overview</b>
            </Typography>
            <Divider />
            <div className="casestudy-section-body">
              <Typography gutterBottom>
                Created a React e-commerce website with functioning checkout
                using Stripe.
              </Typography>
            </div>
          </div>

          {/* new section */}
          <div className="casestudy-section">
            <Typography variant="h5" gutterBottom>
              <b>Problem</b>
            </Typography>
            <Divider />
            <div className="casestudy-section-body">
              <Typography gutterBottom>
                Torri’s Ties is an emerging small business in need of a
                marketplace.
              </Typography>
            </div>
          </div>

          {/* new section */}
          <div className="casestudy-section">
            <Typography variant="h5" gutterBottom>
              <b>Solution</b>
            </Typography>
            <Divider />
            <div className="casestudy-section-body">
              <Typography gutterBottom>
                As part of a civics class, my niece was tasked with
                manufacturing a good for resale. I decided that an e-commerce
                website would make the perfect addition to her project.
              </Typography>
            </div>
          </div>

          {/* new section */}
          <div className="casestudy-section">
            <Typography variant="h5" gutterBottom>
              <b>Final Product</b>
            </Typography>
            <Divider />
            <div className="casestudy-section-body">
              <Typography gutterBottom>coming soon</Typography>
              {/* <iframe
                width="100%"
                style={{ aspectRatio: "16/9" }}
                src="https://www.youtube.com/embed/AkknY9nAYak"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <a
                // live demo link
                href="https://ttp-code-quest.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="text" sx={{ textTransform: "capitalize" }}>
                  Live Demo
                </Button>
              </a>{" "}
              |
              <a
                // source code link
                href="https://github.com/ChelleyD/ChelleyD.github.io"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="text" sx={{ textTransform: "capitalize" }}>
                  Source Code
                </Button>
              </a> */}
            </div>
          </div>

          {/* new section */}
          <div className="casestudy-section-body">
            {/* <Typography variant="h5" gutterBottom>
              <b>Key Takeaways</b>
            </Typography>
            <Divider />
            <div className="casestudy-section-body">
              <Typography gutterBottom>
                <ul>
                  <li>What I learnt:</li>
                  <li>Mistakes made:</li>
                  <li>What I would do differently:</li>
                </ul>
              </Typography>
            </div> */}
          </div>

          {/* new section */}
          <div className="casestudy-section-body">
            {/* <Typography variant="h5" gutterBottom>
              <b>Process</b>
            </Typography>
            <Divider />
            <div className="casestudy-section-body">
              <Typography gutterBottom>blah</Typography>
              <div className="process-img-container">
                <Zoom>
                  <img src={TestImg} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={TestImg} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={TestImg} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={TestImg} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={TestImg} className="process-img" alt="" />
                </Zoom>
              </div>
            </div> */}
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default PP6;
