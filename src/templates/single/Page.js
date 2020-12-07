import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/common/Layout'
import SEO from '../../components/common/Seo'
import Container from '../../components/common/Container'
import styles from './Page.module.css'

const Page = ({ data }) => {
  const { /*nextPage, previousPage, */page } = data
  const { title, content } = page

  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <div className={styles.article}>
          <h1 className={styles.title}>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }} className={styles.content} />
        </div>
      </Container>
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
