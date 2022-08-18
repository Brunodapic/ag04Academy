import * as S from "./ReservationStyledComponent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import acc from "../../images/acc1.jpeg";
import Rating from "@mui/material/Rating";





export default function ReservationCard({
  FullAccommodationDetails,
}: {
  FullAccommodationDetails: any | null;
}) {

  

  const loading ="Loading ...";
  return (
    <S.ReservationCardDiv>
      <S.ReservationMUIcard>
        <div>
          <CardMedia
            component="img"
            width="203"
            height="210"
            image={FullAccommodationDetails ? FullAccommodationDetails.imageUrl :acc}
            alt="Accommodation Image"
            sx={{ borderRadius: 4 }}
          />
        </div>
        <div>
          <S.ReservationCardContent>
            <S.ReservationCardName gutterBottom variant="h5">
              {FullAccommodationDetails ? FullAccommodationDetails.title :loading}
            </S.ReservationCardName>
            <Rating name="read-only" value={5} readOnly />
            <Typography variant="body2" color="text.secondary">
              {FullAccommodationDetails ? FullAccommodationDetails.type:loading}
            </Typography>

            <Typography variant="body2" color="text.primary">
              {FullAccommodationDetails ? FullAccommodationDetails.location.name : loading}
            </Typography>

            <Typography variant="body2" color="text.primary">
              {FullAccommodationDetails ? FullAccommodationDetails.postalCode :loading}
            </Typography>

            <Typography variant="body2" color="text.primary">
              EUR {FullAccommodationDetails ? FullAccommodationDetails.price :loading} per night
            </Typography>
          </S.ReservationCardContent>
        </div>
      </S.ReservationMUIcard>
    </S.ReservationCardDiv>
  );
}
