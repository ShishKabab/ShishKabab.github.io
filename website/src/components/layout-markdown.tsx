import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Layout from "./layout"
import Heading from "./heading"
import Paragraph from "./paragraph"

export default function MarkdownLayout(props: {
  children: React.ReactNode
  pageContext: any
}) {
  return (
    <Layout>
      <Heading level={1}>{props.pageContext.frontmatter.title}</Heading>
      <MDXProvider
        components={{
          h1: props => <Heading level={1}>{props.children}</Heading>,
          h2: props => <Heading level={3}>{props.children}</Heading>,
          h3: props => <Heading level={3}>{props.children}</Heading>,
          p: props => <Paragraph>{props.children}</Paragraph>,
        }}
      >
        {props.children}
      </MDXProvider>
    </Layout>
  )
}
