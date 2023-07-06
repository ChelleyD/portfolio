import * as React from 'react';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea, Typography } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea className="card-wrapper">
        <CardMedia
          component="img"
          height="245"
          image="https://source.unsplash.com/random"
          alt="random unsplash image"
          className="card-image"
        />

        <div className="overlay-right-slide">
          <div className="card-text">
            <Typography>project name</Typography>
            <Typography>tech | stack</Typography>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
}