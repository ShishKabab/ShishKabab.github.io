import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const Ring = styled.div<{ color: string }>`
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 6px solid ${(props) => props.color};
`;

const TriangleRight = styled.div<{ color: string }>`
  position: absolute;
  display: block;
  left: calc(50% + 2px);
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 20px solid ${(props) => props.color};
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
`;

export default function PlayButton(props: {
  color: string;
  onClick?: () => void;
}) {
  return (
    <Container onClick={props.onClick}>
      <Ring color={props.color} />
      <TriangleRight color={props.color} />
    </Container>
  );
}
