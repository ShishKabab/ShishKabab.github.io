import React from "react";
import styled from "styled-components";
import {
  DefaultSpacingBreakpoints,
  Margin,
  SpacingLength,
} from "styled-components-spacing";
import Subtitle from "./subititle";

const Heading1 = styled.h1`
  font-size: 1.8em;
  margin: 0;
  line-height: 150%;
`;

const Heading2 = styled.h2`
  font-size: 1.4em;
  margin: 0;
  line-height: 150%;
`;

const HEADINGS = {
  1: Heading1,
  2: Heading2,
};

const Heading = (props: {
  children: React.ReactNode;
  subtext?: React.ReactNode;
  level?: number;
}) => {
  const level = props.level ?? 1;
  const heading = HEADINGS[level as keyof typeof HEADINGS];
  if (!heading) {
    throw new Error(`Unsupported <Heading> level: ${props.level}`);
  }
  const margin: SpacingLength<DefaultSpacingBreakpoints> =
    level === 1 ? "large" : "medium";
  return (
    <Margin bottom={margin}>
      {React.createElement(heading, props)}
      {props.subtext && (
        <Margin top="small">
          <Subtitle>{props.subtext}</Subtitle>
        </Margin>
      )}
    </Margin>
  );
};

export default Heading;
