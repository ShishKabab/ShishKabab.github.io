import { graphql } from "gatsby"

export function getPostsFromQuery(props: any) {
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
                publishedWhen: frontmatter.publishedWhen as any,
                preview: frontmatter.preview as string,
            }
        })
    items.sort((left, right) => {
        return left.createdWhen.getTime() < right.createdWhen.getTime() ? 1 : -1
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
                    publishedWhen
                }
            }
        }
    }
}
`