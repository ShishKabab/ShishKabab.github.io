import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Margin } from "styled-components-spacing";
import ExternalLink from "../components/external-link";
import Heading from "../components/heading";
// import { Link } from "gatsby"

import Layout from "../components/layout";
import Paragraph from "../components/paragraph";
import SEO from "../components/seo";
import VinceStyle from "../components/vincent-style";
import { PostList } from "../features/posts/components";
import { getPostsFromQuery } from "../features/posts/utils";

const IntroBox = styled.div`
  margin: 100px 0;
  width: 100%;
  max-width: 500px;

  @media (max-width: 700px) {
    margin-top: 50px;
  }
`;

const BlogBox = styled.div``;
const BlogLink = styled(Link)`
  color: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: underline;
`;

function IndexPage(props: any) {
  const blogItems = getPostsFromQuery(props);
  return (
    <Layout>
      <SEO title="Home" />
      <IntroBox>
        <Heading>Hey, I'm Vincent</Heading>
        <Paragraph>
          <VinceStyle>I help people</VinceStyle> and organizations to build
          digital products that can continue to adapt quickly as they grow. By
          using the right tools and techniques fitting the context of teams and
          the problems they're solving, I'm obsessed with bringing joy and
          excitement to people working together to bring something useful into
          the world!
        </Paragraph>
        <Paragraph>
          What does that look like? Over the last years, I've helped WorldBrain
          to build{" "}
          <ExternalLink href="https://memex.garden/">Memex</ExternalLink>,
          setting up in such a way that with a 2-developer team we were able to
          <ol>
            <li>
              launch an elegant, simple and privacy-focused multi-client
              database sync mechanism
            </li>
            <li>
              transition the whole product from local-first to cloud-based in a
              very short time-frame
            </li>
            <li>
              transition a big chunk of business logic from the browser
              extension to the mobile app
            </li>
            <li>
              develop forward-thinking development workflows that allowed easy
              outsourcing of styling work and reduce daily iteration times.
            </li>
          </ol>
        </Paragraph>
        <Paragraph>
          Want to talk?
          <ul>
            <li>
              Connect with me on{" "}
              <ExternalLink href="https://twitter.com/vince_d_boer">
                Twitter
              </ExternalLink>
              {" or "}
              <ExternalLink href="https://www.linkedin.com/in/vincent-at-youapt/">
                LinkedIn
              </ExternalLink>
            </li>
            <li>E-mail me at my first name at youapt dot eu</li>
          </ul>
          Or, check out some of my work on{" "}
          <ExternalLink href="https://github.com/ShishKabab/">
            {" "}
            GitHub
          </ExternalLink>
          .
        </Paragraph>
      </IntroBox>
      <BlogBox>
        <Heading level={1}>Blog posts</Heading>
        <PostList items={blogItems} limit={3} />
        <Margin top="large">
          <BlogLink to="/blog/">All posts &gt;&gt;</BlogLink>
        </Margin>
      </BlogBox>
    </Layout>
  );
}

export const query = graphql`
  {
    allMdx {
      edges {
        node {
          slug
          frontmatter {
            title
            preview
            createdWhen
            publishedWhen
            discoverable
          }
        }
      }
    }
  }
`;

export default IndexPage;
