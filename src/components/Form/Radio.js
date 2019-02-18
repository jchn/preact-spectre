import { h } from 'preact'
import inputClassModifiers from './inputClassModifiers'
import { withClassModifiers } from '../../utils'

const Radio = ({ label, class: c, ...props }) => (
  <label class={`form-radio ${c}`}>
    <input type="radio" {...props} />
    <i class="form-icon" /> {label}
  </label>
)

export default withClassModifiers(inputClassModifiers)(Radio)
