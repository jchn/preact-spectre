import { createComponent, withClassModifiers } from './utils'

const tileClassModifiers = {
  centered: 'tile-centered',
}

const Tile = withClassModifiers(tileClassModifiers)(
  createComponent('div', 'tile')
)
const TileIcon = createComponent('div', 'tile-icon')
const TileContent = createComponent('div', 'tile-content')
const TileContentTitle = createComponent('p', 'tile-title')
const TileContentSubtitle = createComponent('p', 'tile-subtitle')
const TileAction = createComponent('div', 'tile-action')

Tile.Icon = TileIcon
Tile.Content = TileContent
Tile.Content.Title = TileContentTitle
Tile.Content.Subtitle = TileContentSubtitle
Tile.Action = TileAction

export default Tile
