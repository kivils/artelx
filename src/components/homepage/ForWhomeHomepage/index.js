import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '../../common/Container'
import styles from './ForWhomeHomepage.module.css'

const ForWhomeHomepage = () => {
  const data = useStaticQuery(
    graphql`
      query {
          allWpPage(filter: {parentDatabaseId: {eq: 126}}, sort: { fields: [databaseId] }) {
              nodes {
                  title
                  content
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
        {data.allWpPage.nodes.map((node) => (
          <div
            key={node.databaseId}
            className={`${styles.item} ${styles['is-' + node.databaseId]}`}
            style={{
              backgroundImage: node.featuredImage && 'url(' + node.featuredImage.node.mediaItemUrl + ')'
            }}
          >
            <h2>{node.title}</h2>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{__html: node.content}}
            />
          </div>
        ))}
      </Container>
    </div>
  )
}

export default ForWhomeHomepage
