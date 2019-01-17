import { h } from 'preact'
import { createComponent, withClassModifiers } from './utils'

const barClassModifiers = {
  sm: 'bar-sm',
  slider: 'bar-slider',
}

const Bar = withClassModifiers(barClassModifiers)(createComponent('div', 'bar'))

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
