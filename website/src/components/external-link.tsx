import React from "react"
import styled from "styled-components"

const StyledExternalLink = styled.a`
    font-weight: 700;
    color: #333;
`

const ExternalLink = (props: { href: string; children: React.ReactNode }) => {
    return <StyledExternalLink target="_blank" {...props} />
}

export default ExternalLink
