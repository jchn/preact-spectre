import { h } from 'preact'
import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const barClassModifiers = {
  sm: 'bar-sm',
  slider: 'bar-slider',
}

const Base = createComponent('div', 'bar', barClassModifiers)

const Bar = props => <Base {...props} />

const BarItemBase = createComponent('div', 'bar-item')

const BarItem = ({ progress, children, background, ...props }) => (
  <BarItemBase style={{ width: `${progress}%`, background }} {...props}>
    {children}
  </BarItemBase>
)

const SliderButton = createComponent('div', 'bar-slider-btn btn')

Bar.propTypes = {
  sm: PropTypes.bool,
  slider: PropTypes.bool,
}

Bar.Item = BarItem
Bar.SliderButton = SliderButton

export default Bar
