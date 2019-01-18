import { h } from 'preact'
import { createComponent, withClassModifiers } from './utils'

const popoverClassModifiers = {
  top: 'popover-top',
  right: 'popover-right',
  bottom: 'popover-bottom',
  left: 'popover-left',
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

export default Popover
