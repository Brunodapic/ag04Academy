import * as S from "./PopUpStyle";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ReservationConfirmModal: React.FC<{
  togglePopUp: () => void;
  toggleConfirm: () => void;
  AccommodationData?: any;
  FormData?: any;
}> = (props) => {
    console.log(props.AccommodationData)
    console.log(props.FormData)



  var diff = Math.floor((Date.parse(props.FormData.checkOut) - Date.parse(props.FormData.checkIn)) / 86400000);

  console.log(diff)

  const confirm = () => {
    props.togglePopUp();
    props.toggleConfirm();
  };

  return (
    <S.CardStyledConfrim sx={{ maxWidth: 600, maxHeight: 300, padding: 0 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Confirm booking
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.AccommodationData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          From {props.FormData.checkIn} till {props.FormData.checkOut}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.AccommodationData.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.AccommodationData.location.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.AccommodationData.postalCode}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          EUR {props.AccommodationData.price * diff}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => props.togglePopUp()}>
          Cancel
        </Button>
        <Button size="small" onClick={() => confirm()}>
          Confirm
        </Button>
      </CardActions>
    </S.CardStyledConfrim>
  );
};

export default ReservationConfirmModal;
