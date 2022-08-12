import styled from "styled-components";

export const NewPlaceFormWrap = styled.div`
  width: 100%;
  justify-content: left;
  padding: 1rem;

  h2{
text-align: left;
margin-left:7rem;
  }

`;

export const NewPlaceForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  margin-left: 5rem;
  gap: 40px;
  width: 511px;

  div {
    width: 100%;
  }

  bottom {
    align-self: flex-end;
  }
`;

export const RatingForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: "space-between";
`;
