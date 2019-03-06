/** @jsx h */
import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const tabsClassModifiers = {
  block: 'tab-block',
}

const TabsBase = createComponent('ul', 'tab', tabsClassModifiers)

const Tabs = props => <TabsBase {...props} />

Tabs.propTypes = {
  block: PropTypes.bool,
}

const tabItemClassModifiers = {
  active: 'active',
  action: 'tab-action',
}

const TabItem = createComponent('li', 'tab-item', tabItemClassModifiers)

TabItem.propTypes = {
  active: PropTypes.bool,
  action: PropTypes.bool,
}

Tabs.Item = TabItem

export default Tabs
