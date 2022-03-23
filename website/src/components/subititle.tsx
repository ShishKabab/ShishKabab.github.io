import React from "react";
import styled from "styled-components";

const StyledSubtitle = styled.div`
  font-size: 0.8em;
  color: ${(props) => props.theme.subtitle};
`;

export default function Subtitle(props: { children: React.ReactNode }) {
  return <StyledSubtitle>{props.children}</StyledSubtitle>;
}
