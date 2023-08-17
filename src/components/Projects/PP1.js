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
import ArcadeGame from "../../images/programming-project-images/Blips and Chitz Arcade Game.png";
import MM3 from "../../images/programming-project-images/bnc-arcade-process-images/MM 3.png";
import MM4 from "../../images/programming-project-images/bnc-arcade-process-images/MM 4.png";
import MM5 from "../../images/programming-project-images/bnc-arcade-process-images/MM 5.png";
import MM6 from "../../images/programming-project-images/bnc-arcade-process-images/MM 6.png";
import MM7 from "../../images/programming-project-images/bnc-arcade-process-images/MM 7.png";
import MM8 from "../../images/programming-project-images/bnc-arcade-process-images/MM 8.png";
import MM9 from "../../images/programming-project-images/bnc-arcade-process-images/MM 9.png";
import MM10 from "../../images/programming-project-images/bnc-arcade-process-images/MM 10.png";
import MM11 from "../../images/programming-project-images/bnc-arcade-process-images/MM 11.png";
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

const PP1 = () => {
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
            image={ArcadeGame}
            alt="random unsplash image"
            className="card-image"
          />

          <div className="overlay-right-slide">
            <div className="card-text">
              <Typography variant="body1">
                Blips and Chitz Arcade Game
              </Typography>
              <Typography variant="caption text">
                HTML | CSS | jQuery | JavaScript
              </Typography>
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
            <b>Blips and Chitz Arcade Game</b>
          </Typography>
          <Typography>
            <b>Timeline:</b> 3 weeks
          </Typography>
          <Typography>
            <b>Languages:</b> HTML | CSS | jQuery | JavaScript
          </Typography>
          <Typography>
            <b>Roles:</b> UI Designer | Front End Developer | Project Manager
          </Typography>
          <Typography>
            <b>Tools:</b> Adobe Photoshop | Mterialize CSS | Jamboard | Replit |
            GitHub
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
                I spear-headed UI/UX designs, project planning/management and
                front-end programming. Created a themed virtual arcade machine
                with a team of 2 others. Completed games include:
                <ul>
                  <li>Prison Break (Speed Typing)</li>
                  <li>Wrenches & Gears (Tic-Tac-Toe)</li>
                </ul>
                I also provided some valuable input towards some of the games’
                logic code and features. Due to limited time and knowledge, the
                project was not completed in its entity before the end of the
                bootcamp.
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
                The premise for my capstone project for the MEC TTP Summer 2021
                Bootcamp was as follows:
                <blockquote>
                  Your feet have been accidentally zapped by Rick's Portal Gun
                  and transported to a random dimension. (Each dimension = 1
                  room). You must solve a complicated, web based puzzle / game
                  to jump to the next dimension, eventually (maybe) making it
                  back home.
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
                After my team and I settled on doing something arcade related, I
                pitched the idea to theme it around Blips and Chitz. Blips and
                Chitz is an intergalactic arcade which exists in the Rick and
                Morty universe. Beings from various dimensions frequent this
                place so it seemed ideal given the prompt.
              </Typography>

              <Typography gutterBottom>
                The rules are simple. Successfully beat all games on screen.
                After each win, a fragment of a code will be awarded. These
                fragments must be put together and entered into the code panel,
                in order to leave this room.
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
                src="https://www.youtube.com/embed/6y0EQCPq_MA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <a
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
                href="https://github.com/ChelleyD/blips-and-chitz-arcade-game"
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
                  <li>
                    What I learnt: drawing with CSS, pseudo classes and
                    elements, how to check session storage for data, manipulate
                    CSS through JQuery
                  </li>
                  <li>
                    Mistakes made: the first iteration of this project used a
                    static background image which resulted in a misalignment
                    with the arcade machine’s screen and its text. To remedy
                    this, I researched drawing with CSS.
                  </li>
                  <li>
                    What I would do differently: I’d scale back or choose
                    simpler games since the project might have been too
                    ambitious given the time frame and skill level.
                  </li>
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
              <Typography gutterBottom>
                Jamboard was used throughout this project as a central hub to
                share:
                <ul>
                  <li>colour scheme</li>
                  <li>designs</li>
                  <li>game concepts</li>
                  <li>ideas for improvement</li>
                </ul>
              </Typography>
              <div className="process-img-container">
                <Zoom>
                  <img src={MM3} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={MM4} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={MM5} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={MM6} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={MM7} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={MM8} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={MM9} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={MM10} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={MM11} className="process-img" alt="" />
                </Zoom>
              </div>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default PP1;
