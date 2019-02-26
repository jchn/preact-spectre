import { h } from 'preact'
import { createComponent } from '../../utils'
import inputClassModifiers from './inputClassModifiers'

const Base = createComponent('label', 'form-checkbox', inputClassModifiers)

const Checkbox = ({ label, class: c, ...props }) => (
  <Base class={c}>
    <input type="checkbox" {...props} />
    <i class="form-icon" /> {label}
  </Base>
)

export default Checkbox
