import React, { Component } from "react";
import {
  ContactHeading,
  ContactSubHeading,
  ContactMainContainer,
  ContactTopDetailsContainer,
  ContactTopInsideDetailsDiv,
  ContactDeepInside,
  Contactinput,
  SecondContactInput,
  ContactButton,
  ContactButtonText,
  ContactImageTag,
  LastTextTag,
} from "./Styling/Styling";

class Contact extends Component {
  render() {
    return (
      <ContactMainContainer>
        <ContactHeading>CONTACT</ContactHeading>
        <ContactSubHeading>Fan?Drop a note!</ContactSubHeading>
        <ContactTopDetailsContainer>
          <ContactTopInsideDetailsDiv>
            <ContactDeepInside>
              <p>Icon</p>
              <p>Chicago, US</p>
            </ContactDeepInside>
            <ContactDeepInside>
              <p>Icon</p>
              <p>Phone:+00 151515</p>
            </ContactDeepInside>
            <ContactDeepInside>
              <p>Email:</p>
              <p>mail@mail.com</p>
            </ContactDeepInside>
          </ContactTopInsideDetailsDiv>
          <ContactTopInsideDetailsDiv>
            <ContactDeepInside>
              <Contactinput placeholder="Plaease" />
              <Contactinput placeholder="New "></Contactinput>
            </ContactDeepInside>
            <ContactDeepInside>
              <SecondContactInput placeholder="Message"></SecondContactInput>
            </ContactDeepInside>
          </ContactTopInsideDetailsDiv>
        </ContactTopDetailsContainer>
        <ContactButton>
          <ContactButtonText>SEND</ContactButtonText>
        </ContactButton>
        <ContactImageTag src="https://www.w3schools.com/w3images/map.jpg"></ContactImageTag>
        <LastTextTag>Powered by w3.css</LastTextTag>
      </ContactMainContainer>
    );
  }
}

export default Contact;
