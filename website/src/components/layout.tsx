import React from "react";
import styled, { ThemeProvider } from "styled-components";

import "@fontsource/karla/300.css";
import "@fontsource/karla/300-italic.css";
import "@fontsource/karla/700.css";
import "../global.css";
import { THEME } from "../theme";
import { Margin } from "styled-components-spacing";
import { Link } from "gatsby";

const StyledLayout = styled.div`
  font-family: "Karla", sans-serif;
  font-size: 16px;
  color: #000;
  line-height: 150%;

  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Header = styled.header`
  flex-shrink: 0;

  display: flex;
`;

const HeaderLeftArea = styled.div``;

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
`;

const Footer = styled.footer`
  flex-shrink: 0;
`;

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
          <Margin vertical="largest">{props.children}</Margin>
        </Main>
        <Footer>{/* This is the footer */}</Footer>
      </StyledLayout>
    </ThemeProvider>
  );
};

const HeaderMenuItem = (props: { to: string; children: string }) => {
    return (
        <Margin right="largest">
            <HeaderMenuLink to={props.to}>{props.children}</HeaderMenuLink>
        </Margin>
    )
}

export default Layout;
