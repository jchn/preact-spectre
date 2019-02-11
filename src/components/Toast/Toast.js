import PropTypes from 'prop-types'
import { createComponent, withClassModifiers } from '../../utils'

const toastClassModifiers = {
  intent: intent => `toast-${intent}`,
}

const Toast = withClassModifiers(toastClassModifiers)(
  createComponent('div', 'toast')
)

Toast.propTypes = {
  intent: PropTypes.oneOf(['primary', 'success', 'warning', 'error']),
}

export default Toast
