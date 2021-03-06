import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Layout from "./layout"
import Heading from "./heading"
import Paragraph from "./paragraph"
import ToggleList, { ToggleListItem } from "./toggle-list"

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
        {React.Children.map(props.children, child => {
          if (!child || typeof child !== "object") {
            return child
          }
          if (!("type" in child && "props" in child)) {
            return child
          }
          if (
            (child.type as any).displayName !== "MDXCreateElement" ||
            child.props.mdxType !== "ul"
          ) {
            return child
          }

          let key = 0
          const parsed = parseMdxListRoot(child, () => `${key++}`)
          // console.log(parsed)
          // return null
          return <ToggleList children={parsed} />
        })}
      </MDXProvider>
    </Layout>
  )
}

export function parseMdxListRoot(
  element: React.ReactElement,
  generateKey: () => string
) {
  const nodes: ToggleListItem[] = []
  let children = element.props.children
  if (!(children instanceof Array)) {
    children = [children]
  }

  for (const listItem of children) {
    if (listItem.props.mdxType !== "li") {
      continue
    }

    nodes.push(parseMdxListItem(listItem, generateKey))
  }

  return nodes
}

export function parseMdxListItem(
  element: React.ReactElement,
  generateKey: () => string
): ToggleListItem {
  if (typeof element.props.children === "string") {
    return {
      content: [{ key: generateKey(), node: element.props.children }],
      children: [],
      key: generateKey(),
    }
  }

  const item: ToggleListItem = { content: [], children: [], key: generateKey() }
  let children = element.props.children
  if (!(children instanceof Array)) {
    children = [children]
  }
  for (const child of children) {
    if (typeof child === "string") {
      item.content.push({ key: generateKey(), node: child })
      continue
    }
    if (child.props.mdxType !== "ul") {
      item.content.push({ key: generateKey(), node: child })
      continue
    }
    item.children = parseMdxListRoot(child, generateKey)
  }
  return item
}
