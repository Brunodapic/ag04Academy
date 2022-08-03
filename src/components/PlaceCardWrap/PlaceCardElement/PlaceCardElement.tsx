import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./style.css";

interface PlaceCardElementProps {
  title: string;
  location: string;
  subtitle: string;
  image: string;
}

export default function PlaceCardElement(props: PlaceCardElementProps) {
  return (
    <Card className="PlaceCardContainer" sx={{ maxWidth: 297, maxHeight: 413 }}>
      <CardMedia
        className="PlaceCardImage"
        component="img"
        height="266"
        width="297"
        image={props.image}
        alt="Place Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.location}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {props.subtitle}
        </Typography>
        <CardActions className="PlacCardButtons">
          <Button color="success" size="small">
            EDIT
          </Button>
          <Button color="error" size="small">
            DELETE PLACE
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
