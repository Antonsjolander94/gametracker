import React, { useState, useEffect } from 'react'
import BackgroundImage from 'gatsby-background-image'
import './game-card-cover.styles.scss'

const GameCardCover = ({ image }) => {
  return (
    <div className={`game-card-cover `}>
      <BackgroundImage className="game-card-cover-img" fluid={image}>
        <div className={`game-card-cover-highlight `}></div>
      </BackgroundImage>
    </div>
  )
}

export default GameCardCover
