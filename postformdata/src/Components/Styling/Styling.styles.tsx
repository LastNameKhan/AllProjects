import styled from "@emotion/styled";

export const StyledButtonSubmit = styled.button`
  background-color: ${(props: any) =>
    props.variant === "outline" ? "#fff" : "#1a1a1d"};
  color: ${(props: any) => (props.variant === "outline" ? "#1a1a1d" : "#fff")};
  text-align: center;
  cursor: pointer;
  height: 50px;
  width: 150px;
  border-radius: 5px;
  margin: 10px;
  font-size: 18px;
  transition: 0.5s all ease-out;
  &:hover {
    translate: 0px;
    background-color: ${(props: any) =>
      props.variant !== "outline" ? "#fff" : "#1a1a1d"};
    color: ${(props: any) =>
      props.variant !== "outline" ? "#1a1a1d" : "#fff"};
  }
`;
