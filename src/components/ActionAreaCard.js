import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="245"
          image="https://source.unsplash.com/random"
          alt="random unsplash image"
          className='project-card'
        /> */}
        <CardContent style={{height: '15rem', backgroundImage: "url('https://source.unsplash.com/random')"}}>
          hello world!
        </CardContent>
      </CardActionArea>
    </Card>
  );
}