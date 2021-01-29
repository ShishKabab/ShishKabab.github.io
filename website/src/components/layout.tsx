/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import "@fontsource/open-sans/300.css"
import "@fontsource/open-sans/300-italic.css"
import "@fontsource/open-sans/700.css"
import "@fontsource/lato/700.css"
import "../global.css"

const StyledLayout = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  color: #000;

  h1, h2, h3 {
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

const HeaderLeftArea = styled.div`

`

const HeaderMenu = styled.nav`
  flex-grow: 2;
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
`

const HeaderMenuItem = styled(Link)`
  margin: 0px 10px;
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
    <StyledLayout>
      <Header>
        <HeaderLeftArea>
        </HeaderLeftArea>
        <HeaderMenu>
          <HeaderMenuItem to="/">Home</HeaderMenuItem>
          {/* <HeaderMenuItem to="/thoughts">Thoughts</HeaderMenuItem> */}
        </HeaderMenu>
      </Header>
      <Main>{props.children}</Main>
      <Footer>
        {/* This is the footer */}
      </Footer>
    </StyledLayout>
  )
}

export default Layout
