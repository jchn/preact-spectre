import { h } from 'preact'
import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const labelClassModifiers = {
  rounded: 'label-rounded',
  kind: kind => `label-${kind}`,
}

const LabelBase = createComponent('span', 'label', labelClassModifiers)

const Label = props => <LabelBase {...props} />

Label.propTypes = {
  kind: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
  ]),
  rounded: PropTypes.bool,
}

export default Label
