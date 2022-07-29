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
import Rating from '@mui/material/Rating';

export default function AccommodationCard() {
  return (
    <Card className='AccCardContainer' sx={{ maxWidth: 297 , maxHeight: 420 }}>
      <CardMedia
        className='AccCardImage'
        component="img"
        height="264"
        width="297"
        image={acc}
        alt="Accommodation Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {AccommodationCardData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {AccommodationCardData.location}
        </Typography>
        <Typography variant="body2" color="text.primary">
          EUR {AccommodationCardData.price}
        </Typography>
        <Rating name="read-only" value={5} readOnly />
      </CardContent>
    </Card>
  );
}

