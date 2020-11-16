import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Container from '../../common/Container'
import styles from './FeaturesHomepage.module.css'

const FeaturesHomepage = () => {
  const data = useStaticQuery(
    graphql`
      query {
          allWpPage(filter: {parentDatabaseId: {eq: 87}}, sort: { fields: [databaseId] }) {
              nodes {
                  title
                  slug
                  excerpt
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
        <div className={styles.row}>
          {data.allWpPage.nodes.map(node => {
            const hasImage = !!node?.featuredImage?.node?.localFile?.childImageSharp
            return (
              <div
                key={node.databaseId}
                className={`${styles.col} ${styles['page_' + node.databaseId]}`}
                data-page-id={node.databaseId}
              >
                <Link to={node.slug} className={styles.link}>
                  <h2
                    className={`${styles.title} ${hasImage ? styles.hasImage : styles.hasBg}`}
                  >
                    {hasImage && (
                      <div className={styles.iconWrapper}>
                        <Img
                          className={styles.icon}
                          fixed={
                            node.featuredImage.node.localFile.childImageSharp.fixed
                          }
                          alt={node.featuredImage.node.altText ? node.featuredImage.node.altText : node.title}
                        />
                      </div>
                    )}
                    {node.title}
                  </h2>
                </Link>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{__html: node.excerpt}}
                />
                <div className={styles.footer}>
                  <Link to={node.slug} className={styles.more}>Узнать больше ></Link>
                </div>
              </div>
            )}
          )}
        </div>
      </Container>
    </div>
  )
}

export default FeaturesHomepage
