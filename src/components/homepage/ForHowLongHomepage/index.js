import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const ForHowLongHomepage = () => {
  const data = useStaticQuery(
    graphql`
      query {
          allWpPage(filter: {parentDatabaseId: {eq: 153}}, sort: { fields: [databaseId] }) {
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
    <div className="features">
      {data.allWpPage.nodes.map((node) => (
        <div className={'page-' + node.databaseId} key={node.databaseId}>
          <h2>{node.title}</h2>
          <div dangerouslySetInnerHTML={{__html: node.content}}/>
          {node.featuredImage &&
            <img src={node.featuredImage.node.mediaItemUrl} alt={node.featuredImage.node.altText || node.title}/>
          }
        </div>
      ))}
    </div>
  )
}

export default ForHowLongHomepage
