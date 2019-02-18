import { createComponent, withClassModifiers } from '../../utils'

const formGroupClassModifiers = {
  success: 'has-success',
  error: 'has-error',
}

const FormGroup = withClassModifiers(formGroupClassModifiers)(
  createComponent('div', 'form-group')
)

export default FormGroup
