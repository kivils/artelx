import React from "react"
import Layout from "../../components/common/Layout"
import { graphql } from "gatsby"

const Page = ({ data }) => {
  const { /*nextPage, previousPage, */page } = data
  const { title, content } = page

  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export default Page

export const query = graphql`
  query page($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPage(id: { eq: $id }) {
      title
      content
    }

    nextPage: wpPage(id: { eq: $nextPage }) {
      title
      uri
    }

    previousPage: wpPage(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
