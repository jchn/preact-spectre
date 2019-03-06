/** @jsx h */
import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

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
  kind: kind => `btn-${kind}`,
  size: size => `btn-${size}`,
}

const Base = createComponent('button', 'btn', buttonModifiers)

const Button = props => <Base {...props} />

Button.defaultProps = {
  is: 'button',
}

Button.displayName = 'Button'

Button.propTypes = {
  kind: PropTypes.oneOf(['primary', 'success', 'error']),
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
