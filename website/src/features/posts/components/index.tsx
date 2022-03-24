import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Margin } from "styled-components-spacing";
import Heading from "../../../components/heading";
// import { Link } from "gatsby"

import Layout from "../../../components/layout";
import PageTitle from "../../../components/page-title";
import Paragraph from "../../../components/paragraph";
import Subtitle from "../../../components/subititle";
import { getPostsFromQuery } from "../../../features/posts/utils";
import { getPostHeaderSubtext } from "../../../utils";

const ArticleList = styled.div`
  margin-top: calc(${(props) => props.theme.spacing.large} * 4);
`;

const ArticleLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const PostIndex = (props: {
  data: any;
  path: string;
  title: string;
  description?: React.ReactNode;
  authorLinks?: boolean;
}) => {
  const items = getPostsFromQuery(props);
  return (
    <Layout>
      <PageTitle>{props.title}</PageTitle>
      {props.description && <Paragraph>{props.description}</Paragraph>}
      <ArticleList>
        <PostList items={items} authorLinks={props.authorLinks} />
      </ArticleList>
    </Layout>
  );
};

export function PostList(props: {
  items: ReturnType<typeof getPostsFromQuery>;
  authorLinks?: boolean;
  limit?: number;
}) {
  const { items } = props;
  return (
    <>
      {items.slice(0, props.limit).map((item) => {
        return (
          <Margin key={item.slug} bottom="medium">
            <PostPreview
              slug={item.slug}
              title={item.title}
              createdWhen={item.createdWhen}
              publishedWhen={item.publishedWhen}
              preview={item.preview}
              authorLink={props.authorLinks}
            />
          </Margin>
        );
      })}
    </>
  );
}

function PostPreview(props: {
  slug: string;
  title: string;
  createdWhen: string | Date;
  publishedWhen: string | Date;
  preview: React.ReactNode;
  authorLink?: boolean;
}) {
  return (
    <>
      <Heading
        level={2}
        subtext={getPostHeaderSubtext(
          {
            createdWhen: props.createdWhen,
            publishedWhen: props.publishedWhen,
          },
          {
            authorLink: props.authorLink,
          }
        )}
      >
        <ArticleLink to={`/${props.slug}`}>{props.title}</ArticleLink>
      </Heading>
      <Paragraph>{props.preview}</Paragraph>
    </>
  );
}
