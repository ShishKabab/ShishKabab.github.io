import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Margin } from "styled-components-spacing"
import Heading from "../../../components/heading"
// import { Link } from "gatsby"

import Layout from "../../../components/layout"
import PageTitle from "../../../components/page-title"
import Paragraph from "../../../components/paragraph"
import Subtitle from "../../../components/subititle"
import { getPostsFromQuery } from "../../../features/posts/utils"

const ArticleList = styled.div`
    margin-top: calc(${props => props.theme.spacing.large} * 4);
`

const ArticleLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`

export const PostIndex = (props: {
    data: any
    path: string
    title: string
    description?: React.ReactNode
}) => {
    const items = getPostsFromQuery(props)
    return (
        <Layout>
            <PageTitle>{props.title}</PageTitle>
            {props.description && <Paragraph>{props.description}</Paragraph>}
            <ArticleList>
                <PostList items={items} />
            </ArticleList>
        </Layout>
    )
}

export function PostList(props: {
    items: ReturnType<typeof getPostsFromQuery>
}) {
    const { items } = props
    return (
        <>
            {items.map(item => {
                const published = new Date(item.publishedWhen)
                return (
                    <Margin key={item.slug} bottom="medium">
                        <PostPreview
                            slug={item.slug}
                            title={item.title}
                            publishedWhen={published}
                            preview={item.preview}
                        />
                    </Margin>
                )
            })}
        </>
    )
}

export const PostPreview = (props: {
    slug: string
    title: string
    publishedWhen: Date
    preview: React.ReactNode
}) => {
    const publishedString = props.publishedWhen.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    return (
        <ArticleLink to={`/${props.slug}`}>
            <Heading level={2} subtext={publishedString}>
                {props.title}
            </Heading>
            <Paragraph>{props.preview}</Paragraph>
        </ArticleLink>
    )
}
