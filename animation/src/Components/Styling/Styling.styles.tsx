import styled from "@emotion/styled";
import { keyframes } from "styled-components";
import { bounce } from "react-animations";



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

export const DiwaliText = styled.p`
  position: relative;
  text-align: center;
  margin: auto;
  justify-content: center;
  font-size: 60px;
  transition: 0.5s all ease-out;
  @media (min-width: 1000px) and (max-width: 1200px) {
    font-size: 50px;
  }
  @media (min-width: 800px) and (max-width: 1000px) {
    font-size: 50px;
  }
  @media (min-width: 600px) and (max-width: 800px) {
    font-size: 25px;
  }
  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 30px;
  }
  @media (min-width: 200px) and (max-width: 400px) {
    font-size: 20px;
  }
  @media (min-width: 0px) and (max-width: 200px) {
    font-size: 20px;
  }
`;

const morph = keyframes`
  0% { border-radius: 5px; }
  50% { border-radius: 50%; }
  100% { border-radius: 5px; }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const BouceAnimation = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: #08aeea;
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
  @keyframes animation {
    0% {
      border-radius: 5px;
    }
    50% {
      border-radius: 50%;
    }
    100% {
      border-radius: 5px;
    }
  }
`;

// export const Ball = styled.div`
//   width: 64px;
//   height: 64px;
//   border-radius: 50%;
//   margin: 0 auto;
//   background-color: #08aeea;
//   background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
//   animation: ${morph} 1s linear infinite, ${spin} 1s ease-in-out infinite;
// `;
