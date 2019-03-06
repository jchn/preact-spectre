/** @jsx h */
import { h } from 'preact'
import { createComponent } from '../../utils'

const Base = createComponent('div', 'chip')

const Chip = props => <Base {...props} />

Chip.defaultProps = {
  is: 'div',
}

export default Chip
