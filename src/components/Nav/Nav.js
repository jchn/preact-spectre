import PropTypes from 'prop-types'
import { withClassModifiers, createComponent } from '../../utils'

const navItemClassModifiers = {
  active: 'active',
}

const Nav = createComponent('ul', 'nav')
const NavItem = withClassModifiers(navItemClassModifiers)(
  createComponent('li', 'nav-item')
)

NavItem.propTypes = {
  active: PropTypes.bool,
}

Nav.Item = NavItem

export default Nav
