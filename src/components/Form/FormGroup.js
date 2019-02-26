import { createComponent } from '../../utils'

const formGroupClassModifiers = {
  success: 'has-success',
  error: 'has-error',
}

const FormGroup = createComponent('div', 'form-group', formGroupClassModifiers)

export default FormGroup
