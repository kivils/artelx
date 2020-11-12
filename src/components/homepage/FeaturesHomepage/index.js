import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Container from '../../common/Container'
import styles from './FeaturesHomepage.module.css'

// import FakeImgFromCache from '../../../../.cache/caches/gatsby-source-wordpress-experimental/a13e90d78a4d8564006878b12eea53d0/artelx-create.svg'
// import FakeImgFromCache2 from '../../../../.cache/caches/gatsby-source-wordpress-experimental/369de678ae922980056283177cd0a8cf/artelx-promote.svg'
import FakeImgFromImages from '../../../images/artelx.svg'

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
                        extension
                        relativePath
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
          {data.allWpPage.nodes.map((node) => {
            // const FakeImg2 = node.featuredImage.node.localFile.relativePath
            return (
              <div
                key={node.databaseId}
                className={`${styles.col} page_${node.databaseId}`}
              >
                <Link to={node.slug} className={styles.link}>
                  <h2
                    className={styles.title}
                  >
                    {!!node?.featuredImage?.node?.localFile?.childImageSharp && node.featuredImage.node.localFile.extension !== 'svg' ? (
                      <Img
                        className={styles.icon}
                        fixed={
                          node.featuredImage.node.localFile.childImageSharp.fixed
                        }
                        alt={node.featuredImage.node.altText ? node.featuredImage.node.altText : node.title}
                      />
                    ) : (
                      <>
                        {/*<img src={FakeImgFromCache} className={styles.icon} alt=""/>*/}
                        {/*<img src={FakeImgFromCache2} className={styles.icon} alt=""/>*/}
                        <img src={FakeImgFromImages} className={styles.icon} alt=""/>
                      </>
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
