/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Header from "./header"

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  )
}

export default Layout
