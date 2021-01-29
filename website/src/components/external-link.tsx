/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"

const StyledExternalLink = styled.a`
  font-weight: bold;
  color: #333;
`

const ExternalLink = (props: { href: string, children: React.ReactNode }) => {
  return (
    <StyledExternalLink target="_blank" {...props} />
  )
}

export default ExternalLink
