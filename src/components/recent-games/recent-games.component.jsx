import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import GameCardGroup from '../game-card-group/game-card-group.component'

export default function RecentGames() {
  return (
    <StaticQuery
      query={graphql`
        {
          games: allContentfulGamePost(
            sort: { fields: updatedAt, order: DESC }
            limit: 10
          ) {
            edges {
              node {
                updatedAt
                title
                slug
                coverImage {
                  fluid(maxWidth: 193) {
                    ...GatsbyContentfulFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ games }) => {
        return <GameCardGroup title={'Recent Games'} games={games} />
      }}
    />
  )
}
