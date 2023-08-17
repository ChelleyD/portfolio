import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TheWorld from "../../images/programming-project-images/We are the World.png";
import WATW1 from "../../images/programming-project-images/the-world-process-images/WATW 1.png";
import WATW2 from "../../images/programming-project-images/the-world-process-images/WATW 2.png";
import WATW3 from "../../images/programming-project-images/the-world-process-images/WATW 3.png";
import WATW4 from "../../images/programming-project-images/the-world-process-images/WATW 4.png";
import WATW5 from "../../images/programming-project-images/the-world-process-images/WATW 5.png";
import WATW6 from "../../images/programming-project-images/the-world-process-images/WATW 6.png";
import WATW7 from "../../images/programming-project-images/the-world-process-images/WATW 7.png";
import WATW8 from "../../images/programming-project-images/the-world-process-images/WATW 8.png";
import Zoom from "react-medium-image-zoom";
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

const PP4 = () => {
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
        <CardActionArea
          className="card-wrapper btn-modal"
          onClick={handleClickOpen}
        >
          <CardMedia
            component="img"
            height="245"
            // image="https://source.unsplash.com/random"
            image={TheWorld}
            alt="random unsplash image"
            className="card-image"
          />

          <div className="overlay-right-slide">
            <div className="card-text">
              <Typography variant="body1">We are the World</Typography>
              <Typography variant="caption text">React</Typography>
            </div>
          </div>
        </CardActionArea>
      </Card>

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
            <b>We are the World</b>
          </Typography>
          <Typography>
            <b>Timeline:</b> 1 week
          </Typography>
          <Typography>
            <b>Languages:</b> React
          </Typography>
          <Typography>
            <b>Roles:</b> UI Designer | Front End Developer | Project Manager
          </Typography>
          <Typography>
            <b>Tools:</b> Adobe Xd | Visual Studio Code | Jamboard | Console |
            Adobe Photoshop | GitHub
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
                Spare-headed UI/UX and implemented a news API on the homepage to
                update with filtered articles. Created a ReactJS web application
                to bring awareness to climate change, with a team of 3 others.
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
                The premise for my capstone project for the MEC TTP Winter 2022
                Bootcamp was as follows:
                <blockquote>
                  Working as a group, design and produce an informational
                  website for social cause. This could be a website about food
                  insecurity, deforestation, gender equality in education,
                  prison reform, or any other social cause. The purpose of the
                  site should be to put out (correct, verified, and cited)
                  information and urge people to take action. This could be by
                  sharing the information, donating money, volunteering time, or
                  even just knowing more.
                </blockquote>
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
                Several ideas were brought forward and then a poll was conducted
                to choose the project. Thereafter, group members were assigned
                roles and briefed on their responsibilities. After a
                low-fidelity mockup was conceptualized as a group, I took the
                liberty to bring it to life with a colour scheme and
                high-fidelity mockup.
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
              <Typography gutterBottom></Typography>
              <iframe
                width="100%"
                style={{ aspectRatio: "16/9" }}
                src="https://www.youtube.com/embed/ovelQDFrKpQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              {/* <a
                // live demo link
                href="https://ttp-code-quest.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="text" sx={{ textTransform: "capitalize" }}>
                  Live Demo
                </Button>
              </a>{" "}
              | */}
              <a
                // source code link
                href="https://github.com/ChelleyD/code-for-good"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="text" sx={{ textTransform: "capitalize" }}>
                  Source Code
                </Button>
              </a>
            </div>
          </div>

          {/* new section */}
          <div className="casestudy-section-body">
            <Typography variant="h5" gutterBottom>
              <b>Key Takeaways</b>
            </Typography>
            <Divider />
            <div className="casestudy-section-body">
              <Typography gutterBottom>
                <ul>
                  <li>What I learnt: how to implement asynchronous functions and API calls</li>
                  {/* <li>Mistakes made:</li>
                  <li>What I would do differently:</li> */}
                </ul>
              </Typography>
            </div>
          </div>

          {/* new section */}
          <div className="casestudy-section-body">
            <Typography variant="h5" gutterBottom>
              <b>Process</b>
            </Typography>
            <Divider />
            <div className="casestudy-section-body">
              <Typography gutterBottom></Typography>
              <div className="process-img-container">
                <Zoom>
                  <img src={WATW1} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={WATW2} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={WATW3} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={WATW4} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={WATW5} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={WATW6} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={WATW7} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={WATW8} className="process-img" alt="" />
                </Zoom>
              </div>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default PP4;
