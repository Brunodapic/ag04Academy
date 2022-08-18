import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./style.css";
import FullAccommodationDetailsProps from "../../../models/accommodationModel";

interface PlaceCardElementProps {
  PlaceCardData: any;
  image: string;
  editForm: (data: any) => void;
  setPopUpToggle: (data: any) => void;
  popUpToggle: boolean;
  setIdDelete: (data: string) => void;
}

export default function PlaceCardElement(props: PlaceCardElementProps) {
  const deletePlace = () => {
    props.setIdDelete(props.PlaceCardData.id);
    props.setPopUpToggle(!props.popUpToggle);
  };

  console.log(props.PlaceCardData)
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
          {props.PlaceCardData && props.PlaceCardData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.PlaceCardData && props.PlaceCardData.location.name}
        </Typography>
        <CardActions className="plac-card-buttons">
          <Button
            color="success"
            size="small"
            onClick={() => {
              props.editForm(props.PlaceCardData);
            }}
          >
            EDIT
          </Button>
          <Button color="error" size="small" onClick={() => deletePlace()}>
            DELETE PLACE
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
