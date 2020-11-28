import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Container from '../../common/Container'
import styles from './ContactLinksHomepage.module.css'

const ContactLinksHomepage = () => {
  const data = useStaticQuery(
    graphql`
      query {
          allWpPage(filter: {parentDatabaseId: {eq: 109}}, sort: { fields: [databaseId] }) {
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
        <h2 className={styles.title}>Расскажите нам о своей проблеме</h2>
        {data.allWpPage.nodes.length &&
          <ul className={styles.list}>
            {data.allWpPage.nodes.map((node) => (
              <li key={node.databaseId} className={styles.item}>
                <Link
                  key={node.databaseId}
                  to={node.slug}
                  className={styles.link}
                >
                  {node.title}
                </Link>
              </li>
            ))}
          </ul>
        }
      </Container>
    </div>
  )
}

export default ContactLinksHomepage
