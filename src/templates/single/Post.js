import React from "react"
import Layout from "../../components/common/Layout"
import { graphql } from "gatsby"

const Post = ({ data }) => {
  const { /*nextPage, previousPage, */page } = data
  const { title, content } = page

  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export default Post

export const query = graphql`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPost(id: { eq: $id }) {
      title
      content
    }

    nextPage: wpPost(id: { eq: $nextPage }) {
      title
      uri
    }

    previousPage: wpPost(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
