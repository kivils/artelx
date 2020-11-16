import React from 'react'

import Layout from '../components/common/Layout'
import SEO from '../components/common/Seo'
import Container from '../components/common/Container'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>404: Страница не найдена</h1>
      <p>Страница не найдена</p>
    </Container>
  </Layout>
)

export default NotFoundPage
