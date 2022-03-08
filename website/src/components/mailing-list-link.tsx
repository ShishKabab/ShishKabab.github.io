import React from "react"
import ExternalLink from "./external-link"
// import styled from "styled-components"

// const StyledExternalLink = styled.a`
//     font-weight: 700;
//     color: #333;
// `

const MailingListLink = (props: { children: React.ReactNode }) => {
    return (
        <ExternalLink href="http://eepurl.com/hWcRyH">
            {props.children}
        </ExternalLink>
    )
}

export default MailingListLink
