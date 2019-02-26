import { createComponent, withClassModifiers } from '../../utils'
import inputClassModifiers from './inputClassModifiers'

const selectClassModifiers = {
  small: 'select-sm',
  large: 'select-lg',
  ...inputClassModifiers,
}

const Select = createComponent('select', 'form-select', selectClassModifiers)

export default Select
