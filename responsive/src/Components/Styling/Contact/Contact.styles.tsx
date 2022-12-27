import styled from "styled-components";

export const ContactMainContainer = styled.div`
  max-width: 800px;
  margin: auto;
  @media (min-width: 0px) and (max-width: 600px) {
    margin-top: 50px;
  }
`;

export const ContactTopDetailsContainer = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  > * {
    &:nth-child(2) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
  }
  @media (min-width: 0px) and (max-width: 600px) {
    display: block;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const ContactTopInsideDetailsDiv = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
    display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3
    , 1fr);
  }
`;

export const ContactDeepInside = styled.div`
  display: flex;
  @media (min-width: 0px) and (max-width: 600px) {
    margin-left: 50px;
  }
  
`;

export const ContactHeading = styled.p`
  font-stretch: extra-expanded;
  font-size: 30px;
  font-weight: 400;
  font-family: Segoe "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const ContactSubHeading = styled.p`
  font-family: "Lato", sans-serif;
  font-style: italic;
  color: #525151;
`;

export const Contactinput = styled.input`
  border: 1px solid grey;
  height: 30px;
  width: 150px;
  margin-left: 20px;
  margin-top: 15px;
  @media (min-width: 0px) and (max-width: 600px) {
    margin-left: 5px;
    width: 140px;
  }
`;

export const SecondContactInput = styled.input`
  border: 1px solid grey;
  height: 30px;
  width: 327px;
  margin-left: 20px;
  @media (min-width: 0px) and (max-width: 600px) {
    margin-left: 5px;
    margin-top: 10px;
    width: 290px;
  }
`;
export const ContactButton = styled.p`
  height: 40px;
  width: 100px;
  margin-top: 15px;
  background-color: black;
  color: white;
  float: right;
  &:hover {
    background-color: #929292;
    color: black;
  }
  @media (min-width: 0px) and (max-width: 600px) {
    margin-top: 150px;
    margin-right: 40px;
  }
`;

export const ContactButtonText = styled.p`
  text-align: center;
  
`;

export const ContactImageTag = styled.img`
  height: 100%;
  width: 100%;
  @media (min-width: 0px) and (max-width: 600px) {
    margin-top: 80px;
  }
  
`;

export const LastTextTag = styled.p`
  color: grey;
`;
