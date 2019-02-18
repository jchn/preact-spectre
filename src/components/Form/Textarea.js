import { createComponent, withClassModifiers } from '../../utils'
import inputClassModifiers from './inputClassModifiers'

const Textarea = createComponent('textarea', 'form-input')

export default withClassModifiers(inputClassModifiers)(Textarea)
