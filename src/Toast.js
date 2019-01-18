import { createComponent, withClassModifiers } from './utils'

const toastClassModifiers = {
  primary: 'toast-primary',
  success: 'toast-success',
  warning: 'toast-warning',
  error: 'toast-error',
}

const Toast = withClassModifiers(toastClassModifiers)(
  createComponent('div', 'toast')
)

export default Toast
