import styled from "styled-components";
import Card from "@mui/material/Card";
import { Button, CardContent, Typography } from "@mui/material";

export const ReservationComponent = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
`;

export const ReservationFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;

  h2 {
    align-content: left;
  }
`;

export const ReservationForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  column-gap: normal;
  width: 80%;

  div {
    margin: 3px;
  }
`;

export const DateFormDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  row-gap: 1rem;

  div {
    width: 100%;
  }
`;

export const ReservationCardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
`;
export const ReservationMUIcard = styled(Card)`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  gap: 10px;

  width: 618px;
  height: 242px;

  background: #ffffff;
  /* Gray/Gray-100 */

  border: 1px solid #e3e3e3;
  border-radius: 8px;
`;

export const ReservationCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 10px;
  width: 201px;
  height: 210px;
`;
export const ReservationCardName = styled(Typography)`
  font-weight: 500;
  font-size: 20px;
  line-height: 160%;
  /* identical to box height, or 32px */

  letter-spacing: 0.15px;
`;

export const ReservationFormSubmitButton = styled(Button)`
  padding: 0px;

  width: 227px;
  height: 42px;

  /* Mint/Mint-400 */

  background: #40e0d0;
  /* Elevation/2 */

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;
export const ReservationFormSubmit = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: right;
`;
