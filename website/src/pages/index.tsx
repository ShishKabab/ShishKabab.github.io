import React from "react"
import styled from "styled-components"
import ExternalLink from "../components/external-link"
import Heading from "../components/heading"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Paragraph from "../components/paragraph"
import SEO from "../components/seo"

const IntroBox = styled.div`
    margin: 100px 0;
    width: 100%;
    max-width: 400px;

    @media (max-width: 700px) {
        margin-top: 50px;
    }
`

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <IntroBox>
            <Heading>Hey, I'm Vincent</Heading>
            <Paragraph>
                I help people and organizations to build digital products that
                can continue to adapt quickly as they grow. By using the right
                tools and techniques fitting the context of teams and the
                problems they're solving, I'm obsessed with bringing joy and
                excitement to people working together to bring something useful
                into the world!
            </Paragraph>
            <Paragraph>
                What does that look like? Over the last years, I've helped
                WorldBrain to build{" "}
                <ExternalLink href="https://memex.garden/">Memex</ExternalLink>,
                setting up in such a way that with a 2-developer team we were
                able to
                <ol>
                    <li>
                        launch an elegant, simple and privacy-focused
                        multi-client database sync mechanism
                    </li>
                    <li>
                        transition the whole product from local-first to
                        cloud-based in a very short time-frame
                    </li>
                    <li>
                        transition a big chunk of business logic from the
                        browser extension to the mobile app
                    </li>
                    <li>
                        develop forward-thinking development workflows that
                        allowed easy outsourcing of styling work and reduce
                        daily iteration times.
                    </li>
                </ol>
            </Paragraph>
            <Paragraph>
                Want to talk?{" "}
                <ExternalLink href="https://twitter.com/vince_d_boer">
                    {" "}
                    Connect with me on Twitter
                </ExternalLink>
                !
            </Paragraph>
        </IntroBox>
    </Layout>
)

export default IndexPage
