import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Container from '../../common/Container'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'

import styles from './TestimonialsHomepage.module.css'

import IconArrowLeft from '../../../images/icon-arrow-left.svg'
import IconArrowRight from '../../../images/icon-arrow-right.svg'

const TestimonialsHomepage = () => {
  const data = useStaticQuery(
    graphql`
      fragment Thumbnail on File {
        childImageSharp {
          fixed(width: 173) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      query {
          allWpPage(filter: {parentDatabaseId: {eq: 73}}, sort: { fields: [databaseId] }) {
              nodes {
                  title
                  slug
                  content
                  job_title
                  databaseId
                  featuredImage {
                    node {
                      altText
                      remoteFile {
                        ...Thumbnail
                      }
                    }
                  }
              }
          }
      }
    `
  )
  return (
    <CarouselProvider
      naturalSlideWidth={1000}
      naturalSlideHeight={300}
      totalSlides={data.allWpPage.nodes.length}
      isPlaying
      isIntrinsicHeight
      infinite
      className={styles.root}
    >
      <Container className={styles.container}>
        <h2 className={styles.title}>Отзывы клиентов</h2>
        <div className={styles.list}>
          <ButtonBack className={`${styles.btn} ${styles.prev}`}>
            <img src={IconArrowLeft} alt="Предыдущий отзыв"/>
          </ButtonBack>
          <ButtonNext className={`${styles.btn} ${styles.next}`}>
            <img src={IconArrowRight} alt="Следующий отзыв"/>
          </ButtonNext>
          <Slider>
            {data.allWpPage.nodes.map((node, index) => (
              <Slide
                key={node.databaseId}
                index={index}
              >
                <div className={`${styles.item} page_${node.databaseId}`}>
                  <div className={styles.aside}>
                    {!!node?.featuredImage?.node?.remoteFile?.childImageSharp && (
                      <Img
                        fixed={
                          node.featuredImage.node.remoteFile.childImageSharp.fixed
                        }
                        alt={node.featuredImage.node.altText ? node.featuredImage.node.altText : node.title}
                      />
                    )}
                    <div className={styles.name}>{node.title}</div>
                    {node.job_title && <div className={styles.info}>{node.job_title}</div>}
                  </div>
                  <div className={styles.content}>
                    <div dangerouslySetInnerHTML={{__html: node.content}}/>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>
        </div>
      </Container>
    </CarouselProvider>
  )
}

export default TestimonialsHomepage
