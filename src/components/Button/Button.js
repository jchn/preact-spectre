import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent, withClassModifiers } from '../../utils'

const shapeClasses = {
  circle: 's-circle',
  square: '',
}

const buttonModifiers = {
  link: 'btn-link',
  active: 'active',
  disabled: 'disabled',
  loading: 'loading',
  clear: 'btn-clear',
  block: 'btn-block',
  shape: shape => `btn-action ${shapeClasses[shape]}`,
  intent: intent => `btn-${intent}`,
  size: size => `btn-${size}`,
}

const Button = withClassModifiers(buttonModifiers)(
  createComponent('button', 'btn')
)

Button.propTypes = {
  intent: PropTypes.oneOf(['primary', 'success', 'error']),
  size: PropTypes.oneOf(['sm', 'lg']),
  shape: PropTypes.oneOf(['circle', 'square']),
  link: PropTypes.bool,
  loading: PropTypes.bool,
  clear: PropTypes.bool,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  block: PropTypes.bool,
}

export default Button
