import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent, withClassModifiers } from '../../utils'

const popoverClassModifiers = {
  position: pos => `popover-${pos}`,
}

const PopoverBase = withClassModifiers(popoverClassModifiers)(
  createComponent('div', 'popover')
)

const Popover = ({ target, children, ...props }) => (
  <PopoverBase {...props}>
    {target}
    <div class="popover-container">{children}</div>
  </PopoverBase>
)

Popover.propTypes = {
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
}

export default Popover
