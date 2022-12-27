import styled from "styled-components";

export const NavbarContainerDiv = styled.div`
  height: 46.5px;
  width: 100%;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: space-between;
  position: fixed;
`;

export const NavbarContentDiv = styled.div`
  color: #fff;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
  cursor: pointer;
`;

export const NavbarChildDivs = styled.div`
  height: 94%;
  width: 100px;
  &:hover {
    background-color: #d6d5d5;
    color: #000;
  }
`;

export const Navbartext = styled.p`
  font-family: sans-serif;
  font-size: 15px Lato;
`;
export const NavbarIconDiv = styled.div`
  border: 2px solid white;
  cursor: pointer;
  &:hover {
    background-color: #929292;
    color: #fff;
  }
`;
