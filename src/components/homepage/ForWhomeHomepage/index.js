import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
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
                      altText
                      localFile {
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
        {data.allWpPage.nodes.map(node => {
            const hasImage = !!node?.featuredImage?.node?.localFile?.childImageSharp
            return (
              <div
                key={node.databaseId}
                className={`${styles.item} ${styles['page_' + node.databaseId]} ${hasImage ? styles.hasImage : styles.hasBg}`}
                data-page-id={node.databaseId}
              >
                <div className={styles.content}>
                  <h2 className={styles.title}>{node.title}</h2>
                  <div
                    className={styles.text}
                    dangerouslySetInnerHTML={{__html: node.content}}
                  />
                </div>
                <div className={styles.imgWrapper}>
                  {hasImage && (
                    <Img
                      fixed={
                        node.featuredImage.node.localFile.childImageSharp.fixed
                      }
                      alt={node.featuredImage.node.altText ? node.featuredImage.node.altText : node.title}
                    />
                  )}
                </div>
              </div>
            )
          })}
      </Container>
    </div>
  )
}

export default ForWhomeHomepage
