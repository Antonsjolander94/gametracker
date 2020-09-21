import React from 'react'
import PlatformCard from '../platform-card/platform-card.component'

import './platform-card-group.styles.scss'

const PlatformCardGroup = ({ platforms }) => {
  return (
    <ul className="platform-card-group">
      {platforms.map((platform, index) => {
        return <PlatformCard platform={platform} key={index} />
      })}
    </ul>
  )
}

export default PlatformCardGroup
