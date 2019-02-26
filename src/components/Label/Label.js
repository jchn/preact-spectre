import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const labelClassModifiers = {
  rounded: 'label-rounded',
  intent: intent => `label-${intent}`,
}

const Label = createComponent('span', 'label', labelClassModifiers)

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
