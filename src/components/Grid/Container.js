import { h } from 'preact'
import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const GridClassModifiers = {
  size: size => `grid-${size}`,
}

const GridBase = createComponent('div', 'container', GridClassModifiers)

const Grid = props => <GridBase {...props} />

Grid.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
}

export default Grid
