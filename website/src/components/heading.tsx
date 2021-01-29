/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"

const StyledHeading = styled.h1`
  font-size: 2em;
`

const Heading = (props: { children: React.ReactNode }) => {
  return (
    <StyledHeading {...props} />
  )
}

export default Heading
