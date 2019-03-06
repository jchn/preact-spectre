import { createComponent } from '../../utils'

const NavbarClassModifiers = {}

const Navbar = createComponent('div', 'navbar', NavbarClassModifiers)

Navbar.propTypes = {}

export const NavbarSection = createComponent('section', 'navbar-section')

Navbar.Section = NavbarSection

export const NavbarCenter = createComponent('section', 'navbar-center')

Navbar.Center = NavbarCenter

export default Navbar
