import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import acc from "../../../images/acc1.jpeg";
import AccommodationCardData from "../../../data/AccommodationCardData.json";
import "./style.css";
import Rating from "@mui/material/Rating";
import { LocationInterface } from "../../../data/ApiInterface";
import { useNavigate } from "react-router-dom";

//imao sam probleme s TS ako bi stavio location: LocationInterface | string ;

export interface NewFullAccommodationDetailsProps {
  id:string;
  title: string;
  subtitle: string;
  description: string;
  type: string;
  categorization: number;
  personCount: number;
  imageUrl: string;
  freeCancelation: boolean;
  price: number;
  location: LocationInterface;
  postalCode: string;
  capacity: number | string | undefined;
}

export default function AccommodationCard({
  FullAccommodationDetailsProps,
}: {
  FullAccommodationDetailsProps: NewFullAccommodationDetailsProps | undefined;
}) {
  let navigate = useNavigate();

  const accommodationClick = ()=>{
    if (FullAccommodationDetailsProps) {
      navigate("/accommodation/"+FullAccommodationDetailsProps.id)
    }
    else{
      console.log("no link")
    }
  }

  return (
    <Card className="AccCardContainer" sx={{ maxWidth: 297, maxHeight: 420 }}>
      <CardMedia
        className="acc-card-image"
        component="img"
        height="264"
        width="297"
        image={
          FullAccommodationDetailsProps
            ? FullAccommodationDetailsProps.imageUrl
            : acc
        }
        onClick={accommodationClick}
        alt="Accommodation Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {FullAccommodationDetailsProps
            ? FullAccommodationDetailsProps.title
            : AccommodationCardData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          None
        </Typography>
        <Typography variant="body2" color="text.primary">
          EUR{" "}
          {FullAccommodationDetailsProps
            ? FullAccommodationDetailsProps.price
            : AccommodationCardData.price}
        </Typography>
        <Rating
          name="read-only"
          value={
            FullAccommodationDetailsProps
              ? FullAccommodationDetailsProps.categorization
              : 5
          }
          readOnly
        />
      </CardContent>
    </Card>
  );
}
/*
<Typography variant="body2" color="text.secondary">
          {FullAccommodationDetailsProps
            ? FullAccommodationDetailsProps.location.name
            : "None"}
        </Typography>


*/