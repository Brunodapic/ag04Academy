import styled from "styled-components";
import Card from "@mui/material/Card";

export const PopUpWrap = styled.div`
  left: 0;
  position: absolute;
  width: 100%;
  height: 877px;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const CardStyled = styled(Card)`
  color: black;
  z-index: 3;
`;
export const CardStyledConfrim = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  color: black;
  z-index: 3;
  text-align: left;

`;
export const CardContentdiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
padding: 0px;
box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
  0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
border-radius: 4px;
color: black;
z-index: 3;
`;
