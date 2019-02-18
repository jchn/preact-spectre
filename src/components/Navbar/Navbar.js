import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent, withClassModifiers } from '../../utils'

const NavbarClassModifiers = {}

const Navbar = withClassModifiers(NavbarClassModifiers)(
  createComponent('div', 'navbar')
)

Navbar.propTypes = {}

export const NavbarSection = createComponent('section', 'navbar-section')

Navbar.Section = NavbarSection

export const NavbarCenter = createComponent('section', 'navbar-center')

Navbar.Center = NavbarCenter

export default Navbar
