import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface SideCardProps {
  personCount: number;
  type: string;
  price: number;
  location: string;
  postalCode: string;
  ToggleBookStay: Function;
}

export default function FullAccComponentSideCard(props: SideCardProps) {
  return (
    <Card
      className="FullAccommodationComponentInfoToast"
      sx={{ backgroundColor: "#f2fdfc" }}
    >
      <CardContent>
        <Typography sx={{ fontWeight: 'bold' }} variant="h5" >Property info</Typography>
        <Typography>{props.personCount} guests</Typography>
        <Typography>{props.type}</Typography>
        <Typography>EUR {props.price} per night</Typography>
        <Typography>{props.location}</Typography>
        <Typography>{props.postalCode}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>{props.ToggleBookStay()}} >BOOK YOUR STAY  &rarr;</Button>
      </CardActions>
    </Card>
  );
}
