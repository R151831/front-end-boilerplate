import React, { Component } from 'react'
import SvgFile from './SvgFile'

class ReactLogo extends Component {
  render() {
    return <SvgFile {...this.props} />
  }
}

export default ReactLogo
