import { createComponent, withClassModifiers } from '../../utils'
import inputClassModifiers from './inputClassModifiers'

const selectClassModifiers = {
  small: 'select-sm',
  large: 'select-lg',
  ...inputClassModifiers,
}

const Select = withClassModifiers(selectClassModifiers)(
  createComponent('select', 'form-select')
)

export default Select
