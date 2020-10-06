import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/common/Layout'
import SEO from '../../components/common/Seo'
import Container from '../../components/common/Container'

const Post = ({ data }) => {
  const { /*nextPage, previousPage, */page } = data
  const { title, content } = page

  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
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
