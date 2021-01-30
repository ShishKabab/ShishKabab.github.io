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
  const { edges } = props.data.allMdx
  const items = (edges as any[])
    .filter(edge => {
      const { slug } = edge.node
      return ("/" + slug).startsWith(props.path)
    })
    .map(edge => {
      const { node } = edge
      const { frontmatter } = node
      const createdWhen = new Date(frontmatter.createdWhen)
      return {
        createdWhen,
        slug: node.slug as string,
        title: frontmatter.title as string,
        preview: frontmatter.preview as string,
      }
    })
  items.sort((left, right) => {
    return left.createdWhen.getTime() < right.createdWhen.getTime() ? 1 : -1
  })
  return (
    <Layout>
      <PageTitle>Thoughts in progress</PageTitle>
      <Paragraph>
        Here I collect things I'm thinking about and may grow into articles over
        time, so I can collect feedback from other people and generate
        discussion as I reseach these topics.
      </Paragraph>
      <ArticleList>
        {items.map(item => {
          return (
            <Margin key={item.slug} bottom="medium">
              <Article
                slug={item.slug}
                title={item.title}
                preview={item.preview}
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
            createdWhen
          }
        }
      }
    }
  }
`

export default ThoughtsIndex
