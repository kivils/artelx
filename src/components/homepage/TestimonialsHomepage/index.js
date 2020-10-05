import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Container from '../../common/Container'
import styles from './TestimonialsHomepage.module.css'

const TestimonialsHomepage = () => {
  const data = useStaticQuery(
    graphql`
      fragment Thumbnail on File {
        childImageSharp {
          fixed(width: 173) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      query {
          allWpPage(filter: {parentDatabaseId: {eq: 73}}, sort: { fields: [databaseId] }) {
              nodes {
                  title
                  slug
                  content
                  job_title
                  databaseId
                  featuredImage {
                    node {
                      altText
                      remoteFile {
                        ...Thumbnail
                      }
                    }
                  }
              }
          }
      }
    `
  )
  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <h2 className={styles.title}>Отзывы клиентов</h2>
        {data.allWpPage.nodes.map((node) => (
          <div
            key={node.databaseId}
            className={`${styles.item} page_${node.databaseId}`}
          >
            <div className={styles.aside}>
              {!!node?.featuredImage?.node?.remoteFile?.childImageSharp && (
                <Img
                  fixed={
                    node.featuredImage.node.remoteFile.childImageSharp.fixed
                  }
                  alt={node.featuredImage.node.altText ? node.featuredImage.node.altText : node.title}
                />
              )}
              <div className={styles.name}>{node.title}</div>
              {node.job_title && <div className={styles.info}>{node.job_title}</div>}
            </div>
            <div className={styles.content}>
              <div dangerouslySetInnerHTML={{__html: node.content}}/>
            </div>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default TestimonialsHomepage
