import { h } from 'preact'
import { createComponent } from '../../utils'

const barClassModifiers = {
  sm: 'bar-sm',
  slider: 'bar-slider',
}

const Bar = createComponent('div', 'bar', barClassModifiers)

const BarItemBase = createComponent('div', 'bar-item')

const BarItem = ({ progress, children, background, ...props }) => (
  <BarItemBase style={{ width: `${progress}%`, background }} {...props}>
    {children}
  </BarItemBase>
)

const SliderButton = createComponent('div', 'bar-slider-btn btn')

Bar.Item = BarItem
Bar.SliderButton = SliderButton

export default Bar
