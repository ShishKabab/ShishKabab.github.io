/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Heading from "./heading"
import SEO from "./seo"

const PageTitle = (props: { children: string }) => {
    return (
        <>
            <SEO title={props.children} />
            <Heading>{props.children}</Heading>
        </>
    )
}

export default PageTitle
