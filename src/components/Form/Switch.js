import { h } from 'preact'
import { withClassModifiers } from '../../utils'
import inputClassModifiers from './inputClassModifiers'

const Switch = ({ label, class: c, ...props }) => (
  <label class={`form-switch ${c}`}>
    <input type="checkbox" {...props} />
    <i class="form-icon" /> {label}
  </label>
)

export default withClassModifiers(inputClassModifiers)(Switch)
