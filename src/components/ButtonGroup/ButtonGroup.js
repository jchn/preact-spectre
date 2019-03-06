/** @jsx h */
import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent, withClassModifiers } from '../../utils'

const buttonGroupModifiers = {
  block: 'btn-group-block',
}

const Base = createComponent('div', 'btn-group', buttonGroupModifiers)

const ButtonGroup = props => <Base {...props} />

ButtonGroup.defaultProps = {
  is: 'div',
}

ButtonGroup.propTypes = {
  block: PropTypes.bool,
}

export default ButtonGroup
