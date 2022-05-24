import React from "react";
import styled from "styled-components";

const StyledExternalLink = styled.a`
  font-weight: 700;
  color: #333;
`;

const ExternalLink = (props: {
  href: string;
  children: React.ReactNode;
  target?: string | null;
}) => {
  let target = props.target;
  if (!target && target !== null) {
    target = "_blank";
  }
  return <StyledExternalLink {...props} target={target ?? undefined} />;
};

export default ExternalLink;
