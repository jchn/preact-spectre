import PropTypes from 'prop-types'
import { createComponent, withClassModifiers } from '../../utils'

const buttonGroupModifiers = {
  block: 'btn-group-block',
}

const ButtonGroup = withClassModifiers(buttonGroupModifiers)(
  createComponent('div', 'btn-group')
)

ButtonGroup.propTypes = {
  block: PropTypes.bool,
}

export default ButtonGroup
