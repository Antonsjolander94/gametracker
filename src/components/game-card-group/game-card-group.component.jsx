import React from 'react'
import GameCard from '../game-card/game-card.component'

import './game-card-group.styles.scss'

const GameCardGroup = ({ games, title }) => {
  return (
    <section className="game-card-group">
      <h3>{title}</h3>
      <ul className="row">
        {games.edges.map(({ node }) => {
          return (
            <li className="col-6 col-md-4" key={node.slug}>
              <GameCard game={node} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default GameCardGroup
