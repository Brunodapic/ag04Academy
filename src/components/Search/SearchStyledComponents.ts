import styled from "styled-components";
import { Button } from "@mui/material";

export const AccommodationSearchOuter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  bottom: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(205, 205, 205, 0.25);
  border-radius: 20px;
  width: 1259px;
  height: 148px;
`;

export const AccommodationSearchInner = styled.form`
  width: 97%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1rem;
  gap: 6px;

  div {
    width: 100%;
  }
`;

export const AccommodationSimpleSearchInner = styled.form`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1rem;
  gap: 6px;

  div {
    width: 100%;
  }
`;

export const AccommodationSearchButton = styled(Button)`
  width: 148px;
  height: 56px;
  padding: 0px;
  width: 148px;
  height: 56px;
  background-color: #40e0d0;

  palete: {
    primary: #40e0d0;
  }

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;
