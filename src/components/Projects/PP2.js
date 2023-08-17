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
import RegEx from "../../images/programming-project-images/Reg-Ex Puzzle.png";
import RE1 from "../../images/programming-project-images/regex-process-images/RE 1.png";
import RE2 from "../../images/programming-project-images/regex-process-images/RE 2.png";
import RE3 from "../../images/programming-project-images/regex-process-images/RE 3.png";
import RE4 from "../../images/programming-project-images/regex-process-images/RE 4.png";
import RE5 from "../../images/programming-project-images/regex-process-images/RE 5.png";
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

const PP2 = () => {
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
            image={RegEx}
            alt="random unsplash image"
            className="card-image"
          />

          <div className="overlay-right-slide">
            <div className="card-text">
              <Typography variant="body1">Reg-Ex Puzzle</Typography>
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
            <b>Reg-Ex Puzzle</b>
          </Typography>
          <Typography>
            <b>Timeline:</b> 2 weeks
          </Typography>
          <Typography>
            <b>Languages:</b> HTML | CSS | jQuery | JavaScript
          </Typography>
          <Typography>
            <b>Roles:</b> UI Designer | Front End Developer | Project Manager
          </Typography>
          <Typography>
            <b>Tools:</b> Mterialize CSS | Replit | GitHub | Adobe Xd
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
                Created a regular expressions crossword puzzle, with 3 different
                levels, using HTML, CSS and Javascript. This project stood out
                among the others as I received some praises from the professor
                after I delivered my presentation. After successful completion,
                I obtained a grade ‘A’.
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
                The prompt for this project was as follows:
                <blockquote>
                  Be creative and work on a project to apply the skills learnt
                  in class. Namely:
                  <ul>
                    <li>bash</li>
                    <li>reg ex</li>
                    <li>sed</li>
                  </ul>
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
                I decided to combine my newly acquired skills from web
                development with that of regular expressions since it is
                compatible with JavaScript.
              </Typography>

              <Typography gutterBottom>
                After some research, the idea of doing a regular expression
                crossword puzzle was finalised.
              </Typography>

              <Typography gutterBottom>
                How to play: Use your knowledge of regular expressions to get
                through levels. Levels comprise of boxes, where each box has a
                row and column value. Your input must simultaneously satisfy
                both regular expressions. If your input is valid, the box will
                turn green after clicking on the submit button. To enable the
                "next" button, all boxes must be turned green.
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
              {/* <iframe
                width="100%"
                style={{ aspectRatio: "16/9" }}
                src="https://www.youtube.com/embed/AkknY9nAYak"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe> */}
              <a
                // live demo link
                href="https://regex-puzzle-265.netlify.app"
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
                href="https://github.com/ChelleyD/regex-puzzle"
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
                    What I learnt: how to implement reg ex in JS, comparing
                    stored values with user input
                  </li>
                  <li>Mistakes made: not making application more responsive</li>
                  <li>
                    What I would do differently: use another method to position
                    boxes and text on screen
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
              <Typography gutterBottom>Adobe Xd was used to create a mockup for this project:</Typography>
              <div className="process-img-container">
                <Zoom>
                  <img src={RE1} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={RE2} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={RE3} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={RE4} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={RE5} className="process-img" alt="" />
                </Zoom>
              </div>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default PP2;
