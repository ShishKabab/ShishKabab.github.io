export function getPostHeaderSubtext(frontmatter: { publishedWhen?: string, createdWhen: string }) {
    const date = new Date(frontmatter.publishedWhen ?? frontmatter.createdWhen)
    const isPublished = !!frontmatter.publishedWhen
    const dateString = date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    return isPublished ? dateString : `Draft created on ${dateString}`
}
