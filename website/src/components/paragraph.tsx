/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import styled from "styled-components";
import { Margin } from "styled-components-spacing";

const StyledParagraph = styled.p`
  margin: 0;
`;

const Paragraph = (props: { children: React.ReactNode }) => {
  return (
    <Margin bottom="medium">
      <StyledParagraph {...props} />
    </Margin>
  );
};

export default Paragraph;
