/** @jsx h */
import { h } from 'preact'
import { createComponent } from '../../utils'
import inputClassModifiers from './inputClassModifiers'

const Base = createComponent('label', 'form-switch', inputClassModifiers)

const Switch = ({ label, class: c, error, success, ...props }) => (
  <Base class={c} error={error} success={success}>
    <input type="checkbox" {...props} />
    <i class="form-icon" /> {label}
  </Base>
)

export default Switch
