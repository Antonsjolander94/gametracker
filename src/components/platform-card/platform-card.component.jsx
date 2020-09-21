import React from 'react'
import { SiNintendoswitch, SiStadia, SiLinux } from 'react-icons/si'
import {
  RiWindowsFill,
  RiAppleFill,
  RiXboxFill,
  RiPlaystationFill,
} from 'react-icons/ri'
import './platform-card.styles.scss'

const PlatformCard = ({ platform }) => {
  const iconSize = '0.9em'

  return (
    <li className="platform-card">
      <div className="platform-card-icon">
        {
          {
            PC: <RiWindowsFill size={iconSize} />,
            macOS: <RiAppleFill size={iconSize} />,
            Linux: <SiLinux size={iconSize} />,
            'Xbox One': <RiXboxFill size={iconSize} />,
            'Xbox Series X': <RiXboxFill size={iconSize} />,
            'Playstation 4': <RiPlaystationFill size={iconSize} />,
            'Playstation 5': <RiPlaystationFill size={iconSize} />,
            'Nintendo Switch': <SiNintendoswitch size={iconSize} />,
            'Google Stadia': <SiStadia size={iconSize} />,
            'Project Scarlett': <RiXboxFill size={iconSize} />,
          }[platform]
        }
      </div>
      <div className="platform-card-divider"></div>
      <div className="platform-card-text">
        <p className="small-text">
          {
            {
              PC: <p>PC</p>,
              macOS: <p>macOS</p>,
              Linux: <p>Linux</p>,
              'Xbox One': <p>Xbox One</p>,
              'Xbox Series X': <p>Xbox Series X</p>,
              'Playstation 4': <p>PS4</p>,
              'Playstation 5': <p>PS5</p>,
              'Nintendo Switch': <p>Nintendo Switch</p>,
              'Google Stadia': <p>Google Stadia</p>,
              'Project Scarlett': <p>Project Scarlett</p>,
            }[platform]
          }
        </p>
      </div>
    </li>
  )
}

export default PlatformCard
