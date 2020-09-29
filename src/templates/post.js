import React from "react"
import Layout from "../components/common/Layout"
import { graphql } from "gatsby"

const Post = ({ data }) => {
  const post = data.allWpPost.nodes[0]

  return (
    <Layout>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
        nodes {
          title
          content
        }
    }
  }
`
