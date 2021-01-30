/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import { Margin } from "styled-components-spacing"

const Heading1 = styled.h1`
  font-size: 2em;
  margin: 0;
`

const Heading2 = styled.h2`
  font-size: 1.5em;
  margin: 0;
`

const Heading = (props: { children: React.ReactNode; level?: number }) => {
  const level = props.level ?? 1
  if (level === 1) {
    return (
      <Margin bottom="medium">
        <Heading1 {...props} />
      </Margin>
    )
  } else if (level === 2) {
    return (
      <Margin bottom="medium">
        <Heading2 {...props} />
      </Margin>
    )
  }
  throw new Error(`Unsupported <Heading> level: ${props.level}`)
}

export default Heading
