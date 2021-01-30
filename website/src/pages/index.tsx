import React from "react"
import styled from "styled-components"
import ExternalLink from "../components/external-link"
import Heading from "../components/heading"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Paragraph from "../components/paragraph"
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
      <Heading>Hey, I'm Vincent</Heading>
      <Paragraph>
        I like to build things and try to focus on projects that can generate
        systemic change, such as collective intelligence, education, art and
        rethinking the way we think about problems. Feel free to reach to me on
        any of these to provide different perspectives, spot errors in
        reasoning, suggest other interesting topics, etc.
      </Paragraph>
      <Paragraph>
        Most of my time doing this is currently spent doing web development as
        CTO at{" "}
        <ExternalLink href="https://www.worldbrain.io/">
          WorldBrain.io
        </ExternalLink>
        , but also collecting, digesting and integrating ideas on these topics
        that I find on the web and through my circle of friends.
      </Paragraph>
    </IntroBox>
  </Layout>
)

export default IndexPage
