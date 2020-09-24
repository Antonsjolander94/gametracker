import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Layout from '../components/layout/layout.component'
import Divider from '../components/divider/divider.component'
import BackgroundImage from 'gatsby-background-image'
import GameCardCover from '../components/game-card-cover/game-card-cover.component'
import PlatformCardGroup from '../components/platform-card-group/platform-card-group.component'
import RecentGames from '../components/recent-games/recent-games.component'
const GamePostTemplate = ({ data }) => {
  const post = data.data
  console.log(post)

  return (
    <Layout>
      <div className="game-page">
        <Helmet title={`${post.title}`} />

        <Container>
          <Row>
            <Col md="auto">
              <GameCardCover image={post.coverImage.fluid} />
            </Col>
            <Col xs={12} md={9}>
              <div className="game-page-info">
                <h1 className="page-title">{post.title}</h1>
                <h2 className="preamble">Release date: 2020-01-03</h2>
                {post.platforms && post.platforms.length && (
                  <PlatformCardGroup platforms={post.platforms} />
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12} md={'auto'}>
              <Button block className="btn-buy ">
                Buy game
              </Button>
            </Col>
            <Col xs={12} md={'auto'}>
              <Button block className="btn-regular ">
                Watch Trailer
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Divider />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Description</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.description.childMarkdownRemark.html,
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Divider />
            </Col>
          </Row>
          <RecentGames />
        </Container>
        {post.coverImage && (
          <>
            <BackgroundImage
              className="game-page-masthead"
              fluid={post.coverImage.fluid}
            >
              <div className="game-page-masthead-overlay"></div>
            </BackgroundImage>
          </>
        )}
      </div>
    </Layout>
  )
}

export default GamePostTemplate

export const GamePostQuery = graphql`
  query GamePostBySlug($slug: String!) {
    data: contentfulGamePost(slug: { eq: $slug }) {
      id
      title
      slug
      releaseDate
      description {
        childMarkdownRemark {
          html
        }
      }
      platforms
      coverImage {
        fluid(maxWidth: 1180) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
