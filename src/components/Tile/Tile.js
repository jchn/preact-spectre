/** @jsx h */
import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const tileClassModifiers = {
  centered: 'tile-centered',
}

const TileBase = createComponent('div', 'tile', tileClassModifiers)

const Tile = props => <TileBase {...props} />

const TileIcon = createComponent('div', 'tile-icon')
const TileContent = createComponent('div', 'tile-content')
const TileContentTitle = createComponent('p', 'tile-title')
const TileContentSubtitle = createComponent('p', 'tile-subtitle')
const TileAction = createComponent('div', 'tile-action')

Tile.Icon = TileIcon
Tile.Content = TileContent
Tile.Title = TileContentTitle
Tile.Subtitle = TileContentSubtitle
Tile.Action = TileAction

Tile.propTypes = {
  centered: PropTypes.bool,
}

export default Tile
