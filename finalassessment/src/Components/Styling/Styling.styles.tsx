import styled from "@emotion/styled";

export const LogoImage = styled.img`
  height: 50px;
  width: 200px;
  color: #fff;
`;

export const StoreDiv = styled.div`
  display: flex;
  border: 2px solid #ccc;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px;
  transition: 0.5s all ease-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  &:hover {
    background-color: #181616;
    color: #ccc;
  }
`;

export const StyledCarouselImage = styled.img`
  box-shadow: 0 -130px 180px 150px rgba(124, 124, 114, 0.6);
  width: 50%;
  transition: ease 1000ms;
  max-height: 280px;
  @media (min-width: 0px) and (max-width: 1200px) {
    width: 100%;
  }
`;

export const StyledButtonSubmit = styled.button`
  background-color: ${(props: any) =>
    props.variant === "outline" ? "#fff" : "#1a1a1d"};
  color: ${(props: any) => (props.variant === "outline" ? "#1a1a1d" : "#fff")};
  text-align: center;
  cursor: pointer;
  height: 50px;
  width: 120px;
  border-radius: 5px;
  margin: 10px;
  font-size: 20px;
  transition: 0.5s all ease-out;
  &:hover {
    translate: 0px;
    background-color: ${(props: any) =>
      props.variant !== "outline" ? "#fff" : "#1a1a1d"};
    color: ${(props: any) =>
      props.variant !== "outline" ? "#1a1a1d" : "#fff"};
  }
  @media (min-width: 0px) and (max-width: 1200px) {
    height: 50px;
    width: 350px;
  }
`;

export const AddItemsButton = styled.button`
  background-color: ${(props: any) =>
    props.variant === "outline" ? "#ccc" : "#000"};
  color: ${(props: any) => (props.variant === "outline" ? "#000" : "#ccc")};
  text-align: center;
  cursor: pointer;
  height: 50px;
  width: 120px;
  margin-left: 10px;
  margin-top: 5px;
  border: none;
  font-size: 20px;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props: any) =>
      props.variant !== "outline" ? "#ccc" : "#1a1a1d"};
    color: ${(props: any) =>
      props.variant !== "outline" ? "#1a1a1d" : "#ccc"};
  }
  @media (min-width: 0px) and (max-width: 1200px) {
    height: 50px;
    width: 350px;
  }
`;

export const SortButton = styled.button`
  background-color: ${(props: any) =>
    props.variant === "outline" ? "#ccc" : "#000"};
  color: ${(props: any) => (props.variant === "outline" ? "#000" : "#ccc")};
  text-align: center;
  cursor: pointer;
  height: 50px;
  width: 120px;
  margin-left: 10px;
  border: none;
  font-size: 20px;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props: any) =>
      props.variant !== "outline" ? "#ccc" : "#1a1a1d"};
    color: ${(props: any) =>
      props.variant !== "outline" ? "#1a1a1d" : "#ccc"};
  }
  @media (min-width: 0px) and (max-width: 1200px) {
    height: 50px;
    width: 350px;
  }
`;

export const HelpCenterParentLeftDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const HelpCenterChildDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const LogoImagetag = styled.img`
  background-color: #000;
  width: 126px;
  justify-content: flex-start;
`;

export const Navbarheadertag = styled.header`
  position: relative;
  top: 0;
  background: #000000;
  left: 0;
  z-index: 3;
  width: 100%;
  color: #fff;
  font-weight: 700;
  font-size: 17px;
  display: flex;
  -webkit-transition: margin-top 0.7s ease;
  transition: margin-top 0.7s ease;
  height: 88px;
`;

export const TopBarInnerDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  max-width: 1900px;
  margin: auto;
  width: 90%;
`;

export const HelpCenterText = styled.p`
  display: inline-block;
  margin: 4px 0 0 0.8rem;
  vertical-align: middle;
  color: #fff;
  padding: 2px 0 4px 0;
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.025em;
  -webkit-transition: color 150ms ease-in-out;
  transition: color 150ms ease-in-out;
  line-height: 23px;
  letter-spacing: -0.5px;
  padding: 2px 0 4px 0.8rem;
  border-left: 2px solid #fff;
  transition: all 0.3s;
`;

export const NavbarButtonsdiv = styled.div`
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  width: 70%;
  @media (min-width: 0px) and (max-width: 1200px) {
    justify-content: flex-end;
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
  }
`;

export const NavbarInsidediv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
`;

export const NavbarbuttonSubmit = styled.button`
  font-size: 24px;
  margin-left: 1rem;
  padding: 6px 22px;
  font-size: 24px;
  line-height: 1.5;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 0;
  border: 1px solid transparent;
  background-image: none;
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
  font-family: sans-serif;
  font-weight: 400;
  cursor: pointer;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  /* text-transform: uppercase; */
  border-radius: 8px;
  background: #4c5fd5;
  color: #fff;
  border-color: #4c5fd5;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #fff;
    color: #000;
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const DrawerSubmit = styled.button`
  font-size: 24px;
  margin-left: 1rem;
  padding: 6px 22px;
  font-size: 24px;
  line-height: 1.5;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 0;
  border: 1px solid transparent;
  background-image: none;
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
  font-family: sans-serif;
  font-weight: 400;
  cursor: pointer;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  /* text-transform: uppercase; */
  border-radius: 8px;
  background: #4c5fd5;
  color: #fff;
  border-color: #4c5fd5;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const DrawerSignIn = styled.button`
  padding: 6px 22px;
  font-size: 24px;
  line-height: 1.5;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 0;
  border: 1px solid transparent;
  background-image: none;
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
  font-family: sans-serif;
  font-weight: 400;
  cursor: pointer;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  /* text-transform: uppercase; */
  border-radius: 8px;
  background: #191a1b;
  color: #fff;
  border: 1px solid #fff;
`;

export const NavbarButtonSignIn = styled.button`
  padding: 6px 22px;
  font-size: 24px;
  line-height: 1.5;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 0;
  border: 1px solid transparent;
  background-image: none;
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
  font-family: sans-serif;
  font-weight: 400;
  cursor: pointer;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  /* text-transform: uppercase; */
  border-radius: 8px;
  background: #191a1b;
  color: #fff;
  border: 1px solid #fff;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const SearchBardiv = styled.main`
  display: block;
`;

export const SearchTextDiv = styled.section`
  padding-top: 80px;
  padding-bottom: 115px;
  position: relative;
  padding-top: calc(4% + 80px);
  padding-bottom: calc(4% + 40px);
  background-color: #191a1b;
  background-color: #dadbf1;
  color: #fff;
  overflow: hidden;
`;

export const InsideSearchDiv = styled.div`
  max-width: 1900px;
  margin: 0 auto;
  width: 90%;
`;

export const MainTextDiv = styled.div`
  font-family: sans-serif;
  color: #000000;
  font-size: 80px;
  letter-spacing: -4px;
  line-height: 76ox;
  font-weight: 400;
  margin: 0 0 1rem;
`;

export const InputForm = styled.form`
  margin-right: auto;
  margin-left: auto;
  max-width: 720px;
`;

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  height: auto;
  padding: 0.5em 1em;
  font-size: 20px;
  font-family: "GT America Standard", sans-serif;
  font-weight: 400;
  line-height: 28px;
  color: #000000;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  background-clip: padding-box;

  padding: 1rem 1rem;
  border-color: #000000;
  -webkit-box-shadow: 0 9px 14px 0 rgb(0 0 0 / 10%);
  box-shadow: 0 9px 14px 0 rgb(0 0 0 / 10%);
  font-size: 20px;
  border-radius: 4px;
  transition: 0.5s all ease-out;
  &:hover {
    border-color: #4c5fd5;
  }
`;

export const HelpButton = styled.button`
  color: #fff;
  padding: 0.92857rem 1.57143rem;
  border-radius: 999rem;
  bottom: 0;
  letter-spacing: 0.6;
  font-size: 1.07143rem;
  position: fixed;
  right: 0;
  bottom: 0;
  margin-right: 10px;
  background-color: #4c5fd5 !important;
  margin-bottom: 10px;
  border: none;
`;

export const HamburgerIscon = styled.button`
  @media (min-width: 1201px) and (max-width: 4000px) {
    display: none;
  }
  @media (min-width: 0px) and (max-width: 1200px) {
    position: absolute;
    right: 0;
    top: 0;
  }
`;




