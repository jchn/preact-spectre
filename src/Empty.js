import { createComponent } from './utils'

const Empty = createComponent('div', 'empty')
const EmptyIcon = createComponent('div', 'empty-icon')
const EmptyTitle = createComponent('div', 'empty-title')
const EmptySubtitle = createComponent('div', 'empty-subtitle')
const EmptyAction = createComponent('div', 'empty-action')

Empty.Icon = EmptyIcon
Empty.Title = EmptyTitle
Empty.Subtitle = EmptySubtitle
Empty.Action = EmptyAction

export default Empty
