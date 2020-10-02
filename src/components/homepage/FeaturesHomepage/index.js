import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
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
        <div className={styles.row}>
          {data.allWpPage.nodes.map((node) => (
            <div
              key={node.databaseId}
              className={`${styles.col} page_${node.databaseId}`}
            >
              <Link to={node.slug} className={styles.link}>
                <h2
                  className={styles.title}
                  style={{
                    backgroundImage: node.featuredImage && 'url(' + node.featuredImage.node.mediaItemUrl + ')'
                  }}
                >
                  {node.title}
                </h2>
              </Link>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{__html: node.content}}
              />
              <div className={styles.footer}>
                <Link to={node.slug} className={styles.more}>Узнать больше ></Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default FeaturesHomepage
