import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { LocationInterface } from "../../../data/ApiInterface";

interface SideCardProps {
  personCount: number;
  type: string;
  price: number;
  location: LocationInterface;
  postalCode: string;
  ToggleBookStay: Function;
}

export default function FullAccComponentSideCard(props: SideCardProps) {
  return (
    <Card
      className="full-accommodation-component-info-toast"
      sx={{ backgroundColor: "#f2fdfc" }}
    >
      <CardContent>
        <Typography sx={{ fontWeight: "bold" }} variant="h5">
          Property info
        </Typography>
        <Typography>{props.personCount?props.personCount:"Unknown number of "} guests</Typography>
        <Typography>{props.type?props.type:""}</Typography>
        <Typography>EUR {props.price?props.price:""} per night</Typography>
        <Typography>{props.location?props.location.name:""}</Typography>
        <Typography>{props.postalCode?props.postalCode:""}</Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            props.ToggleBookStay();
          }}
        >
          BOOK YOUR STAY &rarr;
        </Button>
      </CardActions>
    </Card>
  );
}
