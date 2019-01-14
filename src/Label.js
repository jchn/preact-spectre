import { h } from 'preact'
import { createComponent, withClassModifiers } from './utils'

const labelClassModifiers = {
  primary: 'label-primary',
  secondary: 'label-secondary',
  success: 'label-success',
  warning: 'label-warning',
  error: 'label-error',
  rounded: 'label-rounded',
}

export default withClassModifiers(labelClassModifiers)(
  createComponent('span', 'label')
)
