import React from "react"
import { PostIndex } from "../../features/posts/components"
import { allPostsQuery } from "../../features/posts/utils"

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

export const query = allPostsQuery

export default ThoughtIndex
