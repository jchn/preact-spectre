import { createComponent, withClassModifiers } from '../../utils'

const labelClassModifiers = {
  small: 'label-sm',
  large: 'label-lg',
  inline: 'form-inline',
}

const Label = withClassModifiers(labelClassModifiers)(
  createComponent('label', 'form-label')
)

export default Label
