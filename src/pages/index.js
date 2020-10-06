import React from 'react'

import Layout from '../components/common/Layout'
import SEO from '../components/common/Seo'
import SliderHomepage from '../components/homepage/SliderHomepage'
import FeaturesHomepage from '../components/homepage/FeaturesHomepage'
import ForWhomeHomepage from '../components/homepage/ForWhomeHomepage'
import ForHowLongHomepage from '../components/homepage/ForHowLongHomepage'
import TestimonialsHomepage from '../components/homepage/TestimonialsHomepage'
import ContactLinksHomepage from '../components/homepage/ContactLinksHomepage'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SliderHomepage/>
    <FeaturesHomepage/>
    <ForWhomeHomepage/>
    <ForHowLongHomepage/>
    <TestimonialsHomepage/>
    <ContactLinksHomepage/>
  </Layout>
)

export default IndexPage
