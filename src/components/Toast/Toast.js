import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const toastClassModifiers = {
  intent: intent => `toast-${intent}`,
}

const Toast = createComponent('div', 'toast', toastClassModifiers)

Toast.propTypes = {
  intent: PropTypes.oneOf(['primary', 'success', 'warning', 'error']),
}

export default Toast
