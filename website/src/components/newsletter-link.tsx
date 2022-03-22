import React from "react"
import { NEWSLETTER_FORM_URL } from "../features/newsletter/constants"
import ExternalLink from "./external-link"
// import styled from "styled-components"

// const StyledExternalLink = styled.a`
//     font-weight: 700;
//     color: #333;
// `

const NewsletterLink = (props: { children: React.ReactNode }) => {
    return (
        <ExternalLink href={NEWSLETTER_FORM_URL}>{props.children}</ExternalLink>
    )
}

export default NewsletterLink
