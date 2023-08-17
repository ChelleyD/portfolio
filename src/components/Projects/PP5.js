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
import ShareMeals from "../../images/programming-project-images/Share Meals.png";
import SM1 from "../../images/programming-project-images/share-meals-process-images/SM 1.png";
import SM2 from "../../images/programming-project-images/share-meals-process-images/SM 2.png";
import SM3 from "../../images/programming-project-images/share-meals-process-images/SM 3.png";
import SM4 from "../../images/programming-project-images/share-meals-process-images/SM 4.png";
import SM5 from "../../images/programming-project-images/share-meals-process-images/SM 5.png";
import SM6 from "../../images/programming-project-images/share-meals-process-images/SM 6.png";
import SM7 from "../../images/programming-project-images/share-meals-process-images/SM 7.png";
import SM8 from "../../images/programming-project-images/share-meals-process-images/SM 8.png";
import SM9 from "../../images/programming-project-images/share-meals-process-images/SM 9.png";
import SM10 from "../../images/programming-project-images/share-meals-process-images/SM 10.png";
import SM11 from "../../images/programming-project-images/share-meals-process-images/SM 11.png";
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

const PP5 = () => {
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
            image={ShareMeals}
            alt="random unsplash image"
            className="card-image"
          />

          <div className="overlay-right-slide">
            <div className="card-text">
              <Typography variant="body1">Share Meals Toolkit</Typography>
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
            <b>Share Meals Toolkit</b>
          </Typography>
          <Typography>
            <b>Timeline:</b> 3 weeks
          </Typography>
          <Typography>
            <b>Languages:</b> React
          </Typography>
          <Typography>
            <b>Roles:</b> UI Designer | Front End Developer | Project Manager
          </Typography>
          <Typography>
            <b>Tools:</b> Lunacy | Google Suite | GitHub
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
                Constructed user workflows, user profiles and conceptualized
                UI/UX designs for a food guide toolkit website. Provided
                assistance with GitHub management.
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
                Some college students do not have a reliable food source.
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
                Create a detailed resource to help organizations build and
                maintain a database to connect individuals within their
                community to local food resources and the food they need.
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
              | */}
              <a
                // source code link
                href="https://github.com/share-meals/food-guide-toolkit-website"
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
                    What I learnt: how to use Strapi, NextJS and docker,
                    construct user profiles, GitHub management
                  </li>
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
              <Typography gutterBottom>
                Lunacy was used throughout this project as a central hub to map
                out:
                <ul>
                  <li>design</li>
                  <li>layout</li>
                  <li>colour scheme</li>
                </ul>
              </Typography>
              <div className="process-img-container">
                <Zoom>
                  <img src={SM1} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={SM2} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={SM3} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={SM4} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={SM5} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={SM6} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={SM7} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={SM8} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={SM9} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={SM10} className="process-img" alt="" />
                </Zoom>
                <Zoom>
                  <img src={SM11} className="process-img" alt="" />
                </Zoom>
              </div>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default PP5;
