import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '../../common/Container'
import styles from './YandexContactForm.module.css'

const YandexContactForm = () => {
  const data = useStaticQuery(
    graphql`
      query {
        wpPage(databaseId: {eq: 330}) {
          link
          title
        }
      }
    `
  )

  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{data.wpPage.title}</h2>
        </div>
      </Container>
    </div>
  )
}

export default YandexContactForm
