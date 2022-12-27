import React, { Component } from "react";
import {
  BandDatapara,
  BandHeading,
  BandImageDiv,
  BandImageTag,
  BandNameTag,
  BandSubheading,
  BrandImageTagChildDiv,
  BandcontainerDiv,
} from "./Styling/Styling";

class Band extends Component {
  render() {
    return (
        <BandcontainerDiv>
          <BandHeading>THE BAND</BandHeading>
          <BandSubheading>We love music</BandSubheading>
          <BandDatapara>
            A long time ago, in a galaxy far, far away... It is a period of
            civil war. Rebel spaceships, striking from a hidden base, have won
            their first victory against the evil Galactic Empire. During the
            battle, Rebel spies managed to steal secret plans to the Empire's
            ultimate weapon, the Death Star, an armored space station with
            enough power to destroy an entire planet. Pursued by the Empire's
            sinister agents, Princess Leia races home aboard her starship,
            custodian of the stolen plans that can save her people and restore
            freedom to the galaxy....
          </BandDatapara>
          <BandImageDiv>
            <BrandImageTagChildDiv>
              <p>This</p>
              <BandImageTag src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-rise-of-skywalker-rey-daisy-ridley-1588067729.jpg?crop=0.253xw:0.472xh;0.402xw,0.224xh&resize=480:*" />
            </BrandImageTagChildDiv>
            <BrandImageTagChildDiv>
              <p>is the</p>
              <BandImageTag src="https://upload.wikimedia.org/wikipedia/en/5/54/Solo_A_Star_Wars_Story_poster.jpg" />
            </BrandImageTagChildDiv>
            <BrandImageTagChildDiv>
              <p>Way</p>
              <BandImageTag src="https://m.media-amazon.com/images/I/61O5ZjbUjfL._AC_SL1000_.jpg" />
            </BrandImageTagChildDiv>
          </BandImageDiv>
        </BandcontainerDiv>
    );
  }
}

export default Band;
