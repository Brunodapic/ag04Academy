import DeleteListing from "./DeleteListing";
import * as S from "./PopUpStyle";
import ReservationConfirmModal from "./ReservationConfirmModal";

const PopUpWrap: React.FC<{
  togglePopUp: () => void;
  toggleConfirm: () => void;
  AccommodationData?: any;
  FormData?: any;
}> = (props) => {
  return (
    <S.PopUpWrap>
      {props.FormData?
      
      <ReservationConfirmModal
        togglePopUp={props.togglePopUp}
        toggleConfirm={props.toggleConfirm}
        AccommodationData={props.AccommodationData}
        FormData={props.FormData}
      />
      :
      <DeleteListing togglePopUp={props.togglePopUp} toggleConfirm={props.toggleConfirm} />
    }
    </S.PopUpWrap>
  );
};
//<DeleteListing togglePopUp={props.togglePopUp} toggleConfirm={props.toggleConfirm} />
export default PopUpWrap;
