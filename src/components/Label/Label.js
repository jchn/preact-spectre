import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent, withClassModifiers } from '../../utils'

const labelClassModifiers = {
  rounded: 'label-rounded',
  intent: intent => `label-${intent}`,
}

const Label = withClassModifiers(labelClassModifiers)(
  createComponent('span', 'label')
)

Label.propTypes = {
  intent: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
  ]),
}

export default Label
