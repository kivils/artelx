import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Container from '../../common/Container'
import styles from './SliderHomepage.module.css'

const SliderHomepage = () => {
  const data = useStaticQuery(
    graphql`
      query {
          allWpPage(filter: {parentDatabaseId: {eq: 97}}, sort: {fields: databaseId, order: ASC}) {
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
      {data.allWpPage.nodes.map((node) => (
        <Link
          key={node.databaseId}
          to={node.slug}
          className={`${styles.item} ${styles['is-' + node.databaseId]}`}
          style={{
            backgroundImage: node.featuredImage && 'url(' + node.featuredImage.node.mediaItemUrl + ')'
          }}
        >
          <Container className={styles.content}>
            <h2 className={styles.title}>{node.title}</h2>
            <div className={styles.subtitle} dangerouslySetInnerHTML={{__html: node.content}}/>
          </Container>
        </Link>
      ))}
    </div>
  )
}

export default SliderHomepage

