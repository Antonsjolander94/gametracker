import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout/layout.component'
import RecentGames from '../components/recent-games/recent-games.component'
import { Container } from 'react-bootstrap'

const RootIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={data.location}>
      <Helmet title={siteTitle}></Helmet>

      <Container>
        <RecentGames></RecentGames>
      </Container>
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
