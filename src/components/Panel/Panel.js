import { createComponent } from '../../utils'

const Panel = createComponent('div', 'panel')
const PanelHeader = createComponent('div', 'panel-header')
const PanelTitle = createComponent('div', 'panel-title')
const PanelSubtitle = createComponent('div', 'panel-subtitle')
const PanelNav = createComponent('div', 'panel-nav')
const PanelBody = createComponent('div', 'panel-body')
const PanelFooter = createComponent('div', 'panel-footer')

Panel.Header = PanelHeader
Panel.Title = PanelTitle
Panel.Subtitle = PanelSubtitle
Panel.Nav = PanelNav
Panel.Body = PanelBody
Panel.Footer = PanelFooter

export default Panel
