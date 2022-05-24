import { graphql } from "gatsby";
import React from "react";
import { PostIndex } from "../../features/posts/components";

const BlogIndex = (props: any) => {
  return <PostIndex {...props} title={"Blog"} authorLinks />;
};

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
            discoverable
          }
        }
      }
    }
  }
`;

export default BlogIndex;
