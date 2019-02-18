import { h } from 'preact'
import { withClassModifiers } from '../../utils'
import inputClassModifiers from './inputClassModifiers'

const Checkbox = withClassModifiers(inputClassModifiers)(
  ({ label, class: c, ...props }) => (
    <label class={`form-checkbox ${c}`}>
      <input type="checkbox" {...props} />
      <i class="form-icon" /> {label}
    </label>
  )
)

export default Checkbox
