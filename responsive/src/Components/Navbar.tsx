import React, { Component } from "react";
import {
  NavbarContainerDiv,
  NavbarContentDiv,
  NavbarIconDiv,
  NavbarChildDivs,
  Navbartext,
} from "./Styling/Styling"

class Navbar extends Component {
  render() {
    return (
        <NavbarContainerDiv>
          <NavbarContentDiv>
            <NavbarChildDivs>
              <Navbartext>HOME</Navbartext>
            </NavbarChildDivs>
            <NavbarChildDivs>
              <Navbartext>BAND</Navbartext>
            </NavbarChildDivs>
            <NavbarChildDivs>
              <Navbartext>TOUR</Navbartext>
            </NavbarChildDivs>
            <NavbarChildDivs>
              <Navbartext>CONTACT</Navbartext>
            </NavbarChildDivs>
            <NavbarChildDivs>
              <Navbartext>MORE</Navbartext>
            </NavbarChildDivs>
          </NavbarContentDiv>
          <NavbarIconDiv>
            {/* <i className="fa fa-car"></i> */}
            <i className="fa fa-spinner fa-spin" ></i>
          </NavbarIconDiv>
        </NavbarContainerDiv>
    );
  }
}

export default Navbar;
