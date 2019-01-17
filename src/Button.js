import { h } from 'preact'
import { createComponent, withClassModifiers } from './utils'

const buttonModifiers = {
  primary: 'btn-primary',
  success: 'btn-success',
  link: 'btn-link',
  error: 'btn-error',
  small: 'btn-sm',
  large: 'btn-lg',
  active: 'active',
  disabled: 'disabled',
  loading: 'loading',
  clear: 'clear',
}

export default withClassModifiers(buttonModifiers)(
  createComponent('button', 'btn')
)
