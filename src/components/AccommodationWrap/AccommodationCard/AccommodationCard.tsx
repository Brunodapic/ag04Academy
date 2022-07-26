import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import acc from "../../../images/acc1.jpeg"
import AccommodationCardData from "../../../data/AccommodationCardData.json"
import { maxHeight } from '@mui/system';
import './style.css'

export default function AccommodationCard() {
  return (
    <Card sx={{ maxWidth: 297 , maxHeight: 413 }}>
      <CardMedia
        className='AccCardImage'
        component="img"
        height="266"
        width="297"
        image={acc}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {AccommodationCardData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {AccommodationCardData.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {AccommodationCardData.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

