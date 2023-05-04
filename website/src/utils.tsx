import React from "react";

export function getPostHeaderSubtext(
  frontmatter: {
    createdWhen: string | Date;
    publishedWhen?: string | Date;
  },
  options?: {
    authorLink?: boolean;
  }
) {
  let type: 'page' | 'draft-post' | 'published-post'
  if (frontmatter.publishedWhen) {
    type = 'published-post'
  } else if (frontmatter.createdWhen)  {
    type = 'draft-post'
  } else (
    type = 'page'
  )

  const date = (frontmatter.publishedWhen || frontmatter.createdWhen) && new Date(frontmatter.publishedWhen ?? frontmatter.createdWhen);
  const dateString = date && date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const author = options?.authorLink && ""; // kept just in case

  let prefix: React.ReactNode = ''
  if (type === 'draft-post') {
    prefix = <>Draft created on {dateString}&nbsp;</>
  } else if (type === 'published-post') {
    prefix = <>{dateString}&nbsp;</>
  } else if (type === 'page') {
    // prefix = <>Page&nbsp;</>
  }
  return (
    <> {prefix}{author} </>
  );
}
