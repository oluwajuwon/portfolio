import React from 'react'

import Layout from '../components/layout'
import Top from './top'
import About from './about'
import Portfolio from './portfolio'
import Footer from './footer'

const IndexPage = () => (
  <Layout>
    <Top></Top>
    <About></About>
    <Portfolio></Portfolio>
    <Footer></Footer>
  </Layout>
  
)

export default IndexPage
