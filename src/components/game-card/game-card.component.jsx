import React from 'react'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import './game-card.styles.scss'

const GameCard = ({ game }) => {
  console.log(game)
  return (
    <Link to={`/game/${game.slug}`} className="game-card">
      {/* <Img alt="" fluid={game.coverImage.fluid} /> */}
      <BackgroundImage
        className="game-card-masthead"
        fluid={game.coverImage.fluid}
      />
      {game.title}
    </Link>
  )
}
export default GameCard
