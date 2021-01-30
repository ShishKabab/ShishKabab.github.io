import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Margin } from "styled-components-spacing"
import Heading from "../../components/heading"
// import { Link } from "gatsby"

import Layout from "../../components/layout"
import PageTitle from "../../components/page-title"
import Paragraph from "../../components/paragraph"

const ArticleList = styled.div`
  margin-top: calc(${props => props.theme.spacing.large} * 4);
`

const ArticleLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const ThoughtsIndex = (props: any) => {
  console.log(props)
  return (
    <Layout>
      <PageTitle>Thoughts in progress</PageTitle>
      <Paragraph>
        Here I collect things I'm thinking about and may grow into articles over
        time.
      </Paragraph>
      <ArticleList>
        {props.data.allMdx.edges.map((edge: any) => {
          const { node } = edge
          const { slug, frontmatter } = node
          if (!("/" + slug).startsWith(props.path)) {
            return null
          }
          return (
            <Margin key={slug} bottom="medium">
              <Article
                slug={slug}
                title={frontmatter.title}
                preview={frontmatter.preview}
              />
            </Margin>
          )
        })}
      </ArticleList>
    </Layout>
  )
}

const Article = (props: {
  slug: string
  title: string
  preview: React.ReactNode
}) => {
  return (
    <ArticleLink to={`/${props.slug}`}>
      <Heading level={2}>{props.title}</Heading>
      <Paragraph>{props.preview}</Paragraph>
    </ArticleLink>
  )
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
          }
        }
      }
    }
  }
`

export default ThoughtsIndex
