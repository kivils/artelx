import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '../../common/Container'
import styles from './YandexContactForm.module.css'

// 258
const YandexContactForm = () => {
  const data = useStaticQuery(
    graphql`
      query {
        wpPage(databaseId: {eq: 330}) {
          link
          title
          content
        }
      }
    `
  )

  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{data.wpPage.title}</h2>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.wpPage.content }}/>
        </div>
      </Container>
    </div>
  )
}

export default YandexContactForm
