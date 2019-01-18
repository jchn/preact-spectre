import { createComponent } from './utils'

const Panel = createComponent('div', 'panel')
const PanelHeader = createComponent('div', 'panel-header')
const PanelTitle = createComponent('div', 'panel-title')
const PanelNav = createComponent('div', 'panel-nav')
const PanelBody = createComponent('div', 'panel-body')
const PanelFooter = createComponent('div', 'panel-footer')

Panel.Header = PanelHeader
Panel.Header.Title = PanelTitle
Panel.Nav = PanelNav
Panel.Body = PanelBody
Panel.Footer = PanelFooter

export default Panel
