import * as S from "./ReservationStyledComponent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import acc from "../../images/acc1.jpeg";
import Rating from "@mui/material/Rating";
import FullAccommodationDetailsProps from "../../models/accommodationModel";

export default function ReservationCard({
  FullAccommodationDetails,
}: {
  FullAccommodationDetails: FullAccommodationDetailsProps;
}) {
  return (
    <S.ReservationCardDiv>
      <S.ReservationMUIcard>
        <div>
          <CardMedia
            component="img"
            width="203"
            height="210"
            image={acc}
            alt="Accommodation Image"
            sx={{ borderRadius: 4 }}
          />
        </div>
        <div>
          <S.ReservationCardContent>
            <S.ReservationCardName gutterBottom variant="h5">
              {FullAccommodationDetails.title}
            </S.ReservationCardName>
            <Rating name="read-only" value={5} readOnly />
            <Typography variant="body2" color="text.secondary">
              {FullAccommodationDetails.type}
            </Typography>

            <Typography variant="body2" color="text.primary">
              {FullAccommodationDetails.location}
            </Typography>

            <Typography variant="body2" color="text.primary">
              {FullAccommodationDetails.postalCode}
            </Typography>

            <Typography variant="body2" color="text.primary">
              EUR {FullAccommodationDetails.price} per night
            </Typography>
          </S.ReservationCardContent>
        </div>
      </S.ReservationMUIcard>
    </S.ReservationCardDiv>
  );
}
