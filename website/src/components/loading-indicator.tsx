import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const Ring = styled.div<{ color: string }>`
  display: inline-block;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 6px solid ${(props) => props.color};
    border-color: ${(props) => props.color} transparent
      ${(props) => props.color} transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;

export default function LoadingIndicator(props: { color: string }) {
  return <Ring color={props.color} />;
}
