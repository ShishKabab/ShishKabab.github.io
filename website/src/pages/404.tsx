import React from "react"
import Heading from "../components/heading"

import Layout from "../components/layout"
import Paragraph from "../components/paragraph"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Page not found" />
        <Heading>404: Page not found - Infinite Paradox</Heading>
        <Paragraph>
            You just landed on a page that doesn't exist, which means you aren't
            really seeing any page. Or are you? Anyway, you probably just
            followed a broken link. Sorry for that!
        </Paragraph>
    </Layout>
)

export default NotFoundPage
