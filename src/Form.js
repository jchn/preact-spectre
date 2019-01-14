import { h } from 'preact'
import { createComponent, withClassModifiers } from './utils'

const formInputModifiers = {
  small: 'input-sm',
  large: 'input-lg',
}

export const FormInput = withClassModifiers(formInputModifiers)(
  createComponent('input', 'form-input')
)

export const FormTextarea = withClassModifiers(formInputModifiers)(
  createComponent('textarea', 'form-input')
)

const formLabelModifiers = {
  small: 'label-sm',
  large: 'label-lg',
  inline: 'form-inline',
}

export const FormLabel = withClassModifiers(formLabelModifiers)(
  createComponent('label', 'form-label')
)

const formSelectModifiers = {
  small: 'select-sm',
  large: 'select-lg',
}

export const FormSelect = withClassModifiers(formSelectModifiers)(
  createComponent('select', 'form-select')
)

const formModifiers = {
  horizontal: 'form-horizontal',
}

const Form = withClassModifiers(formModifiers)(createComponent('form'))

export const Radio = ({ label, ...props }) => (
  <label class="form-radio">
    <input type="radio" {...props} />
    <i class="form-icon" /> {label}
  </label>
)

export const Switch = ({ label, ...props }) => (
  <label class="form-switch">
    <input type="checkbox" {...props} />
    <i class="form-icon" /> {label}
  </label>
)

export const Checkbox = ({ label, ...props }) => (
  <label class="form-checkbox">
    <input type="checkbox" {...props} />
    <i class="form-icon" /> {label}
  </label>
)

Form.Input = FormInput
Form.Textarea = FormTextarea
Form.Label = FormLabel
Form.Select = FormSelect
Form.Radio = Radio
Form.Switch = Switch
Form.Checkbox = Checkbox

export default Form
