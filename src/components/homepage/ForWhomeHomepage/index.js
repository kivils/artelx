import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '../../common/Container'
import styles from './ForWhomeHomepage.module.css'

const ForWhomeHomepage = () => {
  const data = useStaticQuery(
    graphql`
      query {
          allWpPage(filter: {parentDatabaseId: {eq: 47}}, sort: { fields: [databaseId] }) {
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
            className={`${styles.item} page_${node.databaseId}`}
          >
            <div className={styles.content}>
              <h2 className={styles.title}>{node.title}</h2>
              <div
                className={styles.text}
                dangerouslySetInnerHTML={{__html: node.content}}
              />
            </div>
            {node.featuredImage &&
              <div className={styles.imgWrapper}>
                <img
                  className={styles.img}
                  src={node.featuredImage.node.mediaItemUrl}
                  alt={node.featuredImage.node.altText || node.title}
                />
              </div>
            }
          </div>
        ))}
      </Container>
    </div>
  )
}

export default ForWhomeHomepage
