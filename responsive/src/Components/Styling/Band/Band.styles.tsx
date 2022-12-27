import styled from "styled-components";

export const BandcontainerDiv = styled.div`
  max-width: 800px;
  margin: auto;
`;

export const BandHeading = styled.p`
  font-size: 30px;
  font-weight: 400;
  margin: 30px 0;
  font-family: Segoe "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const BandSubheading = styled.p`
  font-size: 15px;
  line-height: 1.5;
  font-family: "Lato", sans-serif;
  font-style: italic;
  color: #333333;
`;

export const BandDatapara = styled.p`
  text-align: justify;
  margin: auto;
`;

export const BandImageDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  height: 255px;
  margin-top: 30px;
  @media (min-width: 0px) and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const BrandImageTagChildDiv = styled.div``;

export const BandImageTag = styled.img`
  border-radius: 4px;
  height: 142px;
  width: 142px;
  margin: auto;
`;

export const BandNameTag = styled.p``;
