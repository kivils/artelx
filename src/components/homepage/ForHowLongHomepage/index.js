import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Container from '../../common/Container'
import styles from './ForHowLongHomepage.module.css'

const ForHowLongHomepage = () => {
  const data = useStaticQuery(
    graphql`
      query {
          allWpPage(filter: {parentDatabaseId: {eq: 41}}, sort: { fields: [databaseId] }) {
              nodes {
                  title
                  content
                  databaseId
                  featuredImage {
                    node {
                      altText
                      remoteFile {
                        ...ThumbnailHomepage
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
      {data.allWpPage.nodes.map((node) => (
        <div
          key={node.databaseId}
          className={`${styles.item} page_${node.databaseId}`}
          style={{
            backgroundColor: '#884d42',
          }}
        >
          {!!node?.featuredImage?.node?.remoteFile?.childImageSharp && (
            <div className={styles.imgWrapper}>
              <Img
                fluid={
                  node.featuredImage.node.remoteFile.childImageSharp.fluid
                }
                className={styles.img}
                alt={node.featuredImage.node.altText ? node.featuredImage.node.altText : node.title}
              />
            </div>
          )}
          <Container>
            <div className={styles.content}>
              <h2 className={styles.title}>{node.title}</h2>
              <div className={styles.text} dangerouslySetInnerHTML={{__html: node.content}}/>
            </div>
          </Container>
        </div>
      ))}
    </div>
  )
}

export default ForHowLongHomepage
