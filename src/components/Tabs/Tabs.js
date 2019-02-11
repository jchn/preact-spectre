import PropTypes from 'prop-types'
import { createComponent, withClassModifiers } from '../../utils'

const tabsClassModifiers = {
  block: 'tab-block',
}

const Tabs = withClassModifiers(tabsClassModifiers)(
  createComponent('ul', 'tab')
)

Tabs.propTypes = {
  block: PropTypes.bool,
}

const tabItemClassModifiers = {
  active: 'active',
  action: 'tab-action',
}

const TabItem = withClassModifiers(tabItemClassModifiers)(
  createComponent('li', 'tab-item')
)

TabItem.propTypes = {
  active: PropTypes.bool,
  action: PropTypes.bool,
}

Tabs.Item = TabItem

export default Tabs
