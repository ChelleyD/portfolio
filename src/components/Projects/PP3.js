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
import ArcaneCards from "../../images/programming-project-images/Arcane Collectable Cards.png";
import ARC1 from "../../images/programming-project-images/arcane-cc-process-images/ARC 1.png";
import ARC2 from "../../images/programming-project-images/arcane-cc-process-images/ARC 2.png";
import ARC3 from "../../images/programming-project-images/arcane-cc-process-images/ARC 3.png";
import ARC4 from "../../images/programming-project-images/arcane-cc-process-images/ARC 4.png";
import ARC5 from "../../images/programming-project-images/arcane-cc-process-images/ARC 5.png";
import ARC6 from "../../images/programming-project-images/arcane-cc-process-images/ARC 6.png";
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

const PP3 = () => {
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
            image={ArcaneCards}
            alt="random unsplash image"
            className="card-image"
          />

          <div className="overlay-right-slide">
            <div className="card-text">
              <Typography variant="body1">Arcane Collectable Cards</Typography>
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
            <b>Arcane Collectable Cards</b>
          </Typography>
          <Typography>
            <b>Timeline:</b> 1 day
          </Typography>
          <Typography>
            <b>Languages:</b> React
          </Typography>
          <Typography>
            <b>Roles:</b> UI Designer | Front End Developer | Project Manager
          </Typography>
          <Typography>
            <b>Tools:</b> Adobe Xd | Visual Studio Code | Jamboard | Console |
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
                Designed a deck of cards and created a ReactJS application which
                utilized a package to implement swiping cards off a deck.
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
                The premise for this project from MEC TTP Winter 2022 Bootcamp
                was as follows:
                <blockquote>
                  Imagine that you are creating new trading cards for a game,
                  television show, movie, or book that interests you. Your task
                  is to build a single page React website that shows off at
                  least 3 trading cards of your own design. Look at existing
                  trading cards and determine the general structures / patterns
                  in cards to help you decide on what components you will need
                  to set up. You can use Jamboard or something similar to sketch
                  out your ideas before implementing them in code.
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
                Arcane had just been released on Netflix so it was in recent
                memory and seemed perfect for this project. A character card was
                made for various characters, stating their:
                <ul>
                  <li>name</li>
                  <li>species</li>
                  <li>year of origin</li>
                  <li>abilities</li>
                  <li>hero/villain status</li>
                  <li>character portrait</li>
                </ul>
              </Typography>

              <Typography gutterBottom>
                The first iteration lined up the cards horizontally but then I
                tested out various layouts and settled on a swappable deck.
                Characters were arranged in alphabetical order.
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
                src="https://www.youtube.com/embed/AkknY9nAYak"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <a
                // live demo link
                href="https://ttp-arcane-trading-cards.netlify.app"
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
                href="https://github.com/ChelleyD/react-collectible-cards/tree/main"
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
                  <li>What I learnt: how to implement packages via npm</li>
                  {/* <li>Mistakes made:</li> */}
                  <li>What I would do differently: add character voices</li>
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
                Jamboard was used throughout this project as a central hub to map out:
                <ul>
                  <li>card design</li>
                  <li>website layout</li>
                  <li>colour scheme</li>
                </ul>
              </Typography>
              <div className="process-img-container">
                <Zoom>
                  <img src={ARC1} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={ARC2} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={ARC3} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={ARC4} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={ARC5} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={ARC6} className="process-img" alt="" />
                </Zoom>
              </div>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default PP3;
