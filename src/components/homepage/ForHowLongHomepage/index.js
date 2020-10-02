import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
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
        <div
          key={node.databaseId}
          className={`${styles.item} page_${node.databaseId}`}
          style={{
            backgroundColor: '#884d42',
            backgroundImage: node.featuredImage && 'url(' + node.featuredImage.node.mediaItemUrl + ')'
          }}
        >
          <Container className={styles.content}>
            <h2 className={styles.title}>{node.title}</h2>
            <div className={styles.text} dangerouslySetInnerHTML={{__html: node.content}}/>
          </Container>
        </div>
      ))}
    </div>
  )
}

export default ForHowLongHomepage
