import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '../../common/Container'
import styles from './TestimonialsHomepage.module.css'

const TestimonialsHomepage = () => {
  const data = useStaticQuery(
    graphql`
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
                      mediaItemUrl
                      altText
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
              {node.featuredImage &&
              <img src={node.featuredImage.node.mediaItemUrl} alt={node.featuredImage.node.altText || node.title}/>
              }
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
