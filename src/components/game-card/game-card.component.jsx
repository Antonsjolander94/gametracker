import React from 'react'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import './game-card.styles.scss'

const GameCard = ({ game }) => {
  console.log(game)
  return (
    <li className="game-card">
      <Link to={`/game/${game.slug}`} title={game.title}>
        <BackgroundImage
          className="game-card-masthead"
          fluid={game.coverImage.fluid}
        />
      </Link>
    </li>
  )
}
export default GameCard
