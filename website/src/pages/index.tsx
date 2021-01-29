import React from "react"
import styled from "styled-components"
import ExternalLink from "../components/external-link"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IntroBox = styled.div`
  margin: 200px 0;
  width: 100%;
  max-width: 400px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroBox>
    <h1>Hey, I'm Vincent</h1>
    <p>
    I like to build things and try to focus on things that can generate systemic change, such as collective intelligence, education, art and rethinking the way we think about problems.
    </p>
    <p>
    Most of my time doing this is currently spent doing web development as CTO at <ExternalLink href="https://www.worldbrain.io/">Worldbrain.io</ExternalLink>, but also collecting, digesting and integrating ideas on these topics that I find on the web and through my circle of friends.
    </p>
    </IntroBox>
  </Layout>
)

export default IndexPage
