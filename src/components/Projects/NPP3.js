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
import HPChallenge from "../../images/non-programming-project-images/HP HBCU Business Challenge.png";
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

const NPP3 = () => {
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
            image={HPChallenge}
            alt="random unsplash image"
            className="card-image"
          />

          <div className="overlay-right-slide">
            <div className="card-text">
              <Typography variant="body1">
                HP HBCU Business Challenge
              </Typography>
              <Typography variant="caption text">Competition</Typography>
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
            <b>HP HBCU Business Challenge</b>
          </Typography>
          <Typography>
            <b>Timeline:</b> 2 weeks
          </Typography>
          <Typography>
            <b>Subject:</b> Competition
          </Typography>
          <Typography>
            <b>Roles:</b> College Representative
          </Typography>
          <Typography>
            <b>Tools:</b> Adobe Photoshop | Google Docs | Google Slides
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
                Students were handpicked by the Dean to compete in a business
                pitch competition. A business proposal was conceived which
                consisted of marketing strategy, competitor analysis and
                supporting financials. Our 4 member team pitched to HP
                executives resulting in a $550M profit margin over the first
                five years.
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
                With the introduction of Reverb G2 with Omnicept bioanalytics,
                HP has set a new bar for immersive VR experiences. But, today’s
                solutions are just the beginning of a huge transformation. The
                rate of change is extremely high and Immersive solutions of the
                next 5 years will look completely different than they do today.
                <ol>
                  <li>
                    What will Immersive solutions look like and how will they be
                    integrated into our world in 5 years? How could they help
                    democratize and expand opportunities in various areas of
                    Business and Society in general?
                  </li>
                  <li>
                    Starting with Omnicept capabilities, what transformational
                    Immersive Products, Ecosystems and Services should HP create
                    in the next 5 years to lead the way to these new realities?
                  </li>
                  <li>
                    Will there be separate Consumer and Commercial solutions or
                    will these merge? Will solutions be mostly VR, AR or some
                    combination?
                  </li>
                  <li>
                    What Commercial, Governmental and Research partnerships
                    should HP forge to help achieve these end states?
                  </li>
                </ol>
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
                We observed a lack of immersiveness between the end user and
                their workout experience at home. Our solution was to merge VR
                with fitness to create a more immersive experience for the user
                when working out and building an ecosystem around the products.
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
            <Typography variant="h5" gutterBottom>
              <b>Key Takeaways</b>
            </Typography>
            <Divider />
            <div className="casestudy-section-body">
              <Typography gutterBottom>
                <ul>
                  <li>What I learnt: financial reporting, marketing strategies, presenting in a professional environment</li>
                  {/* <li>Mistakes made:</li>
                  <li>What I would do differently:</li> */}
                </ul>
              </Typography>
            </div>
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

export default NPP3;
