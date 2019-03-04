import { h } from 'preact'
import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const Pre = createComponent('pre', 'code', {}, { lang: 'data-lang' })

const Code = ({ children, ...props }) => (
  <Pre {...props}>
    <code>{children}</code>
  </Pre>
)

Code.propTypes = {
  /** The language the code is written in */
  lang: PropTypes.string,
}

export default Code
