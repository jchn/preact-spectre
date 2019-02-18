import { createComponent, withClassModifiers } from '../../utils'
import classModifiers from './inputClassModifiers'

const inputClassModifiers = {
  small: 'input-sm',
  large: 'input-lg',
  ...classModifiers,
}

const Input = withClassModifiers(inputClassModifiers)(
  createComponent('input', 'form-input')
)

export default Input
