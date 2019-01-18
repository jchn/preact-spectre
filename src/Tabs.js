import { createComponent, withClassModifiers } from './utils'

const tabsClassModifiers = {
  block: 'tab-block',
}

const Tabs = withClassModifiers(tabsClassModifiers)(
  createComponent('ul', 'tab')
)

const tabItemClassModifiers = {
  active: 'active',
  action: 'tab-action',
}

const TabItem = withClassModifiers(tabItemClassModifiers)(
  createComponent('li', 'tab-item')
)

Tabs.Item = TabItem

export default Tabs
