import React from "react";
import VincentStyle from "./components/vincent-style";

export function getPostHeaderSubtext(
  frontmatter: {
    createdWhen: string | Date;
    publishedWhen?: string | Date;
  },
  options?: {
    authorLink?: boolean;
  }
) {
  const date = new Date(frontmatter.publishedWhen ?? frontmatter.createdWhen);
  const isPublished = !!frontmatter.publishedWhen;
  const dateString = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const author = options?.authorLink && (
    <>
      by{" "}
      <a href="/">
        <VincentStyle>Vincent den Boer</VincentStyle>
      </a>
    </>
  );
  return (
    <>
      {isPublished ? dateString : `Draft created on ${dateString}`}
      &nbsp;
      {author}
    </>
  );
}
