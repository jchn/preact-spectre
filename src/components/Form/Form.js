import { h } from 'preact'
import { createComponent, withClassModifiers } from '../../utils'

const formModifiers = {
  horizontal: 'form-horizontal',
}

const Form = withClassModifiers(formModifiers)(createComponent('form'))

export default Form
