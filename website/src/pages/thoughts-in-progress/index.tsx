import { graphql } from "gatsby"
import React from "react"
import { PostIndex } from "../../features/posts/components"

const ThoughtIndex = (props: any) => {
    return (
        <PostIndex
            {...props}
            title={"Thoughts in progress"}
            description={
                <>
                    Here I collect things I'm thinking about and may grow into
                    articles over time, so I can collect feedback from other
                    people and generate discussion as I reseach these topics.
                </>
            }
        />
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
                        publishedWhen
                    }
                }
            }
        }
    }
`

export default ThoughtIndex
