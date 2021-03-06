import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const Menu = createComponent('ul', 'menu')

const menuDividerAttrs = {
  title: 'data-content',
}

const MenuDivider = createComponent('li', 'divider', {}, menuDividerAttrs)

MenuDivider.propTypes = {
  title: PropTypes.string,
}

const MenuItem = createComponent('li', 'menu-item')

const MenuBadge = createComponent('div', 'menu-badge')

Menu.Divider = MenuDivider
Menu.Item = MenuItem
Menu.Badge = MenuBadge

export default Menu
