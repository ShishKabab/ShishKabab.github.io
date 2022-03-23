import React from "react"

export default function FollowUpPosts(props: {
    posts: Array<{ label: string; href: string }>
    current: string
}) {
    const { posts } = props
    const currentIdx = posts.findIndex(p => p.href === props.current)
    if (currentIdx === -1) {
        throw new Error(`Wrong current post provided for follow up posts`)
    }

    const isPostBeforeCurrent = (postIdx: number) => currentIdx < postIdx
    const isLastPost = currentIdx === posts.length - 1
    if (isLastPost) {
        return null
    }
    const isSemiLastPost = currentIdx === posts.length - 2
    if (isSemiLastPost) {
        const lastPost = posts[posts.length - 1]
        return (
            <div>
                Since publishing this article, I've published this follow-up
                article: <a href={lastPost.href}>{lastPost.label}</a>
            </div>
        )
    }

    return (
        <div>
            Since publishing this article, I've published these follow-up
            articles:
            <ul>
                {posts.map((post, postIdx) =>
                    isPostBeforeCurrent(postIdx) ? (
                        <li key={post.href}>
                            <a href={post.href}>{post.label}</a>
                        </li>
                    ) : null
                )}
            </ul>
        </div>
    )
}
