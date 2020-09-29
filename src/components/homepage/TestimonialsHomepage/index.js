import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './TestimonialsHomepage.module.css'

const TestimonialsHomepage = () => {
  const data = useStaticQuery(
    graphql`
      query {
          allWpPage(filter: {parentDatabaseId: {eq: 163}}, sort: { fields: [databaseId] }) {
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
      <h2>Отзывы клиентов</h2>
      {data.allWpPage.nodes.map((node) => (
        <div className={'page-' + node.databaseId} key={node.databaseId}>
          {node.featuredImage &&
          <img src={node.featuredImage.node.mediaItemUrl} alt={node.featuredImage.node.altText || node.title}/>
          }
          <h3>{node.title}</h3>
          <div dangerouslySetInnerHTML={{__html: node.content}}/>
        </div>
      ))}
    </div>
  )
}

export default TestimonialsHomepage
