import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Layout from "./layout"
import Heading from "./heading"
import Paragraph from "./paragraph"
import ToggleList, { ToggleListItem } from "./toggle-list"
import CodeBlock from "./code-block"
import { getPostHeaderSubtext } from "../utils"
import SEO from "./seo"

export default function MarkdownLayout(props: {
    children: React.ReactNode
    path: string
    pageContext: any
}) {
    const { frontmatter } = props.pageContext
    const { title } = frontmatter
    return (
        <Layout>
            <SEO title={title} />
            <Heading level={1} subtext={getPostHeaderSubtext(frontmatter)}>
                {title}
            </Heading>
            <MDXProvider
                components={{
                    h1: () => <Heading level={1}>Use H2 instead!</Heading>,
                    h2: props => <Heading level={2}>{props.children}</Heading>,
                    h3: props => <Heading level={3}>{props.children}</Heading>,
                    p: props => <Paragraph>{props.children}</Paragraph>,
                    pre: CodeBlock,
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
                        (child.type as any).displayName !==
                            "MDXCreateElement" ||
                        child.props.mdxType !== "ul"
                    ) {
                        return child
                    }
                    if (!props.path.startsWith("/thoughts-in-progress/")) {
                        return child
                    }

                    let key = 0
                    const parsed = parseMdxListRoot(child, () => `${key++}`)
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

    const item: ToggleListItem = {
        content: [],
        children: [],
        key: generateKey(),
    }
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
