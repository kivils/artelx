import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Container from '../../common/Container'
import styles from './SliderHomepage.module.css'

const SliderHomepage = () => {
  const data = useStaticQuery(
    graphql`
      fragment ThumbnailHomepage on File {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      query {
          allWpPage(filter: {parentDatabaseId: {eq: 37}}, sort: {fields: databaseId, order: ASC}) {
              nodes {
                  title
                  slug
                  content
                  databaseId
                  featuredImage {
                    node {
                      altText
                      localFile {
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
        <Link
          key={node.databaseId}
          to={node.slug}
          className={`${styles.item} page_${node.databaseId}`}
        >
          {!!node?.featuredImage?.node?.localFile?.childImageSharp && (
            <div className={styles.imgWrapper}>
              <Img
                fluid={
                  node.featuredImage.node.localFile.childImageSharp.fluid
                }
                className={styles.img}
                alt={node.featuredImage.node.altText ? node.featuredImage.node.altText : node.title}
              />
            </div>
          )}
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

