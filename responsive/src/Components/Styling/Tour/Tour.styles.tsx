import styled from "styled-components";

export const TourContainerDiv = styled.div`
  background-color: #000;
  margin: auto;
  width: 100%;
  padding: 0px;
  @media (min-width: 0px) and (max-width: 600px) {
    width: 400px;
    height: 1520px;
    margin: auto;
    margin-top: 450px;
  }
`;

export const TourContainerChildDiv = styled.div`
  max-width: 800px;
  margin: auto;
  /* @media (min-width: 0px) and (max-width: 600px) {
    width: 350px;
    margin: auto;
    margin-top: 450px;
  } */
`;

export const TourHeadingDiv = styled.div`
  padding-top: 50px;
`;

export const TourHeading = styled.p`
  font-stretch: extra-expanded;
  color: #fff;
  font-size: 30px;
  font-weight: 300;
  font-family: Segoe "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
export const TourSubHeading = styled.p`
  font-family: "Lato", sans-serif;
  font-style: italic;
  color: #525151;
`;

export const TicketStatusDiv = styled.div`
  height: 150px;
  width: 709px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background-color: white;
  /* border-bottom: 1px solid black; */
  margin: auto;
  > * {
    &:nth-child(1) {
      justify-content: left;
      display: flex;
      gap: 10px;
    }
  }
  > * {
    &:nth-child(2) {
      justify-content: left;
      display: flex;
      gap: 10px;
    }
  }
  > * {
    &:nth-child(3) {
      justify-content: space-between;
      display: flex;
      gap: 10px;
    }
  }
  @media (min-width: 0px) and (max-width: 600px) {
    height: 150px;
    width: 350px;
    margin-right: 50px;
    margin-left: 13px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const TicketStatusChildDiv = styled.div`
  border-bottom: 1px solid grey;
  @media (min-width: 0px) and (max-width: 600px) {
    height: 50px;
    width: 350px;
  }
`;

export const TourSeptember = styled.p`
  color: #535353;
  margin-left: 10px;
`;

export const TourSoldOut = styled.p`
  background-color: rgb(243, 41, 26);
  color: white;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TourNumberDiv = styled.div`
  background-color: black;
  border-radius: 50%;
  text-align: center;
  margin: auto;
  color: white;
  height: 40px;
  width: 40px;
  margin-left: 550px;
  @media (min-width: 0px) and (max-width: 600px) {
    height: 50px;
    width: 300px;
    margin-left: 200px;
  }
`;

export const TourTextTag = styled.p`
  font-size: 30px;
  font-weight: 400;
  margin: auto;
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 30px;
    font-weight: 400;
    margin: auto;
    margin-top: 8px;
  }
`;

export const TourCardMainDiv = styled.div`
  width: 720px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  margin: auto;
  margin-top: 50px;
  @media (min-width: 0px) and (max-width: 600px) {
    width: 362px;
    height: 800px;
    margin-top: none;
    display: grid;
    margin-left: 20px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;
export const TourCardChildDiv = styled.div`
  height: 360px;
  width: 94.5%;
  background-color: white;
  text-align: left;
`;

export const TourCardChildImage = styled.img`
  height: 169px;
  width: 226px;
  @media (min-width: 0px) and (max-width: 600px) {
    height: 180px;
    width: 341px;
  }
`;

export const TourCardHeadTag = styled.p`
  font-size: 15px;
  font-family: sans-serif;
  font-weight: 900;
  margin-left: 20px;
`;
export const TourCardDateTag = styled.p`
  color: grey;
  font-size: 15px;
  margin-left: 20px;
`;

export const TourCardDetailsDiv = styled.p`
  color: #000;
  font-size: 15px;
  margin-left: 20px;
`;
export const TourCardButton = styled.p`
  height: 40px;
  width: 100px;
  margin-top: 15px;
  background-color: black;
  color: white;
  &:hover {
    background-color: #929292;
    color: black;
  }
`;

export const TourCardButtonText = styled.p`
  text-align: center;
  padding-top: 11px;
`;
