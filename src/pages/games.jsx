import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout/layout.component'

class GamesIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulGamePost.edges')
    console.log({ posts: posts })

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <div>Games</div>
        </div>
      </Layout>
    )
  }
}

export default GamesIndex

export const pageQuery = graphql`
  query GameIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
