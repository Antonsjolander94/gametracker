import React from 'react'
import { Link } from 'gatsby'
import Navigation from '../navigation/navigation.component'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <>
        <Navigation />
        <main id="main">{children}</main>
      </>
    )
  }
}

export default Template
