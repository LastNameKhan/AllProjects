import React, { Component } from "react";
import {
  TourHeading,
  TourSubHeading,
  TourContainerDiv,
  TourHeadingDiv,
  TourContainerChildDiv,
  TicketStatusDiv,
  TicketStatusChildDiv,
  TourSeptember,
  TourSoldOut,
  TourNumberDiv,
  TourTextTag,
  TourCardMainDiv,
  TourCardChildDiv,
  TourCardChildImage,
  TourCardHeadTag,
  TourCardDateTag,
  TourCardDetailsDiv,
  TourCardButton,
  TourCardButtonText,
} from "./Styling/Styling";

export class Tour extends Component {
  render() {
    return (
        <TourContainerDiv>
          <TourContainerChildDiv>
            <TourHeadingDiv>
              <TourHeading>TOUR DATES</TourHeading>
            </TourHeadingDiv>
            <TourSubHeading>Remember to book your tickets!</TourSubHeading>
            <TicketStatusDiv>
              <TicketStatusChildDiv>
                <TourSeptember>September</TourSeptember>
                <TourSoldOut>Sold out</TourSoldOut>
              </TicketStatusChildDiv>
              <TicketStatusChildDiv>
                <TourSeptember>October</TourSeptember>
                <TourSoldOut>Sold out</TourSoldOut>
              </TicketStatusChildDiv>
              <TicketStatusChildDiv>
                <TourSeptember>November</TourSeptember>
                <TourNumberDiv>
                  <TourTextTag>3</TourTextTag>
                </TourNumberDiv>
              </TicketStatusChildDiv>
            </TicketStatusDiv>
            <TourCardMainDiv>
              <TourCardChildDiv>
                <TourCardChildImage src="https://www.w3schools.com/w3images/newyork.jpg"></TourCardChildImage>
                <TourCardHeadTag>New York</TourCardHeadTag>
                <TourCardDateTag>Fri 27 Nov 2016</TourCardDateTag>
                <TourCardDetailsDiv>
                  Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                  <TourCardButton>
                    <TourCardButtonText>Buy Tickets</TourCardButtonText>
                  </TourCardButton>
                </TourCardDetailsDiv>
              </TourCardChildDiv>
              <TourCardChildDiv>
                <TourCardChildImage src="https://www.w3schools.com/w3images/paris.jpg"></TourCardChildImage>
                <TourCardHeadTag>New York</TourCardHeadTag>
                <TourCardDateTag>Fri 27 Nov 2016</TourCardDateTag>
                <TourCardDetailsDiv>
                  Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                  <TourCardButton>
                    <TourCardButtonText>Buy Tickets</TourCardButtonText>
                  </TourCardButton>
                </TourCardDetailsDiv>
              </TourCardChildDiv>
              <TourCardChildDiv>
                <TourCardChildImage src="https://www.w3schools.com/w3images/sanfran.jpg"></TourCardChildImage>
                <TourCardHeadTag>New York</TourCardHeadTag>
                <TourCardDateTag>Fri 27 Nov 2016</TourCardDateTag>
                <TourCardDetailsDiv>
                  Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                  <TourCardButton>
                    <TourCardButtonText>Buy Tickets</TourCardButtonText>
                  </TourCardButton>
                </TourCardDetailsDiv>
              </TourCardChildDiv>
            </TourCardMainDiv>
          </TourContainerChildDiv>
        </TourContainerDiv>
    );
  }
}

export default Tour;
