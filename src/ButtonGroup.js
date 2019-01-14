import { createComponent, withClassModifiers } from './utils'

const buttonGroupModifiers = {
  block: 'btn-group-block',
}

export default withClassModifiers(buttonGroupModifiers)(
  createComponent('div', 'btn-group')
)
