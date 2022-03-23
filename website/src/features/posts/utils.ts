import { graphql } from "gatsby"

export function getPostsFromQuery(props: any) {
    const { edges } = props.data.allMdx
    const items = (edges as any[])
        .filter(edge => {
            const { node } = edge
            const { slug, frontmatter } = node
            if (!frontmatter?.publishedWhen) {
                return false
            }
            return ("/" + slug).startsWith(props.path)
        })
        .map(edge => {
            const { node } = edge
            const { frontmatter } = node
            const createdWhen = new Date(frontmatter.createdWhen)
            const publishedWhen = new Date(frontmatter.publishedWhen)
            return {
                createdWhen,
                publishedWhen,
                slug: node.slug as string,
                title: frontmatter.title as string,
                preview: frontmatter.preview as string,
            }
        })
    items.sort((leftItem, rightItem) => {
        const lhs = leftItem.publishedWhen ?? leftItem.createdWhen
        const rhs = rightItem.publishedWhen ?? rightItem.createdWhen
        return lhs.getTime() < rhs.getTime() ? 1 : -1
    })
    return items
}

export const allPostsQuery = graphql`
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
                    }
                }
            }
        }
    }
`
