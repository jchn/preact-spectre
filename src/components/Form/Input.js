import { createComponent } from '../../utils'
import classModifiers from './inputClassModifiers'

const inputClassModifiers = {
  small: 'input-sm',
  large: 'input-lg',
  ...classModifiers,
}

const Input = createComponent('input', 'form-input', inputClassModifiers)

export default Input
