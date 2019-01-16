import { h } from 'preact'
import { createComponent, withClassModifiers } from './utils'

const barClassModifiers = {
  sm: 'bar-sm',
}

const Bar = withClassModifiers(barClassModifiers)(createComponent('div', 'bar'))

const BarItemBase = createComponent('div', 'bar-item')

const BarItem = ({ progress, children, background, ...props }) => (
  <BarItemBase style={{ width: `${progress}%`, background }} {...props}>
    {children}
  </BarItemBase>
)

Bar.Item = BarItem

export default Bar
