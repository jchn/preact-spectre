/** @jsx h */
import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const toastClassModifiers = {
  kind: kind => `toast-${kind}`,
}

const ToastBase = createComponent('div', 'toast', toastClassModifiers)

const Toast = props => <ToastBase {...props} />

Toast.propTypes = {
  kind: PropTypes.oneOf(['primary', 'success', 'warning', 'error']),
}

export default Toast
