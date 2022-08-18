import * as S from './PopUpStyle'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DeleteListing: React.FC<{
    togglePopUp:()=>void;
    toggleConfirm:()=>void;
  }> = (props) => {


    const confirmDelete = ()=>{
        props.togglePopUp()
        props.toggleConfirm()
    }

    return (
        <S.CardStyled sx={{ maxWidth: 345 , maxHeight: 200 , padding:0}}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Delete listing?
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Are you sure you want to delete this listing? This action cannot be reversed.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={()=>props.togglePopUp()}>Cancel</Button>
            <Button size="small" onClick={()=>confirmDelete()} >DELETE</Button>
          </CardActions>
        </S.CardStyled>
      );
    }


export default DeleteListing;
