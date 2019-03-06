/** @jsx h */
import { h } from 'preact'
import inputClassModifiers from './inputClassModifiers'
import { createComponent } from '../../utils'

const Base = createComponent('label', 'form-radio', inputClassModifiers)

const Radio = ({ label, class: c, error, success, ...props }) => (
  <Base class={c} error={error} success={success}>
    <input type="radio" {...props} />
    <i class="form-icon" /> {label}
  </Base>
)

export default Radio
