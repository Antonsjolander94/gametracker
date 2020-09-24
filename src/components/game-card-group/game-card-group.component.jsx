import React from 'react'
import GameCard from '../game-card/game-card.component'

import './game-card-group.styles.scss'

const GameCardGroup = ({ games, title }) => {
  return (
    <section className="game-card-group">
      <h3>{title}</h3>
      <ul>
        {games.edges.map(({ node }) => {
          return <GameCard game={node} key={node.slug} />
        })}
      </ul>
    </section>
  )
}

export default GameCardGroup
