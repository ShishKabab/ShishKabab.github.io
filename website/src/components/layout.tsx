/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Link } from "gatsby"

import "@fontsource/open-sans/300.css"
import "@fontsource/open-sans/300-italic.css"
import "@fontsource/open-sans/700.css"
import "@fontsource/lato/700.css"
import "../global.css"
import { THEME } from "../theme"
import { Margin } from "styled-components-spacing"

const StyledLayout = styled.div`
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    color: #000;

    h1,
    h2,
    h3 {
        font-family: "Lato", sans-serif;
    }

    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`

const Header = styled.header`
    flex-shrink: 0;

    display: flex;
`

const HeaderLeftArea = styled.div``

const HeaderMenu = styled.nav`
    flex-grow: 2;
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px;
`

const HeaderMenuLink = styled(Link)`
    color: #333;
    text-decoration: none;
`

const Main = styled.main`
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
    flex-grow: 1;
    flex-shrink: 0;
`

const Footer = styled.footer`
    flex-shrink: 0;
`

const Layout = (props: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={THEME}>
            <StyledLayout>
                <Header>
                    <HeaderLeftArea></HeaderLeftArea>
                    <HeaderMenu>
                        <HeaderMenuItem to="/">Home</HeaderMenuItem>
                        <HeaderMenuItem to="/blog">Blog</HeaderMenuItem>
                    </HeaderMenu>
                </Header>
                <Main>
                    <Margin top="largest">{props.children}</Margin>
                </Main>
                <Footer>{/* This is the footer */}</Footer>
            </StyledLayout>
        </ThemeProvider>
    )
}

const HeaderMenuItem = (props: { to: string; children: string }) => {
    return (
        <Margin left="largest">
            <HeaderMenuLink to={props.to}>{props.children}</HeaderMenuLink>
        </Margin>
    )
}

export default Layout
