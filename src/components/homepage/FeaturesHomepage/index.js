import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Container from '../../common/Container'
import styles from './FeaturesHomepage.module.css'

const FeaturesHomepage = () => {
  const data = useStaticQuery(
    graphql`
      query {
          allWpPage(filter: {parentDatabaseId: {eq: 108}}, sort: { fields: [databaseId] }) {
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
    <Container className={styles.root}>
      <div className={styles.row}>
        {data.allWpPage.nodes.map((node) => (
          <div
            key={node.databaseId}
            className={`${styles.col} ${styles['is-' + node.databaseId]}`}
          >
            <Link to={node.slug}>
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
  )
}

export default FeaturesHomepage
