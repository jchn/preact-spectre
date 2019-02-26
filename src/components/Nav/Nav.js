import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const navItemClassModifiers = {
  active: 'active',
}

const Nav = createComponent('ul', 'nav')
const NavItem = createComponent('li', 'nav-item', navItemClassModifiers)

NavItem.propTypes = {
  active: PropTypes.bool,
}

Nav.Item = NavItem

export default Nav
