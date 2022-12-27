import styled from "styled-components";

interface MyProps {
  variant?: any;
}

export const StyledButton = styled.button<MyProps>`
  background-color: ${(props: any) =>
    props.variant === "outline" ? "#fff" : "#4b3c77"};
  color: ${(props: any) => (props.variant === "outline" ? "#f8f2f2" : "#f7f0f0")};
  border-radius: 3px;
  height: 40px;
  width: 100px;
  margin-left: 10px;
  height: 40px;
  margin-top: 10px;
  border-radius: 10px;
  align-items: center;
  display: inline-block;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props: any) =>
      props.variant !== "outline" ? "#fff" : "#e8ecea"};
    color: ${(props: any) => (props.variant !== "outline" ? "teal" : "#fff")};
  }
`;
