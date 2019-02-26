import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const popoverClassModifiers = {
  position: pos => `popover-${pos}`,
}

const PopoverBase = createComponent('div', 'popover', popoverClassModifiers)

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
