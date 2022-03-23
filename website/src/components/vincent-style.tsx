import React from "react"
import styled from "styled-components"

const Styled = styled.span`
    background: #ff0;
    padding: 5px;
    font-weight: bold;
`

export default function VincentStyle(props: { children: React.ReactNode }) {
    return <Styled>{props.children}</Styled>
}
