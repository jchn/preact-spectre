import { createComponent } from '../../utils'

const labelClassModifiers = {
  small: 'label-sm',
  large: 'label-lg',
  inline: 'form-inline',
}

const Label = createComponent('label', 'form-label', labelClassModifiers)

export default Label
