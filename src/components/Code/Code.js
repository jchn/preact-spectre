import { h } from 'preact'
import { createComponent, withToDOMAttrs } from '../../utils'

const Pre = withToDOMAttrs({
  lang: 'data-lang',
})(createComponent('pre', 'code'))

export default ({ children, ...props }) => (
  <Pre {...props}>
    <code>{children}</code>
  </Pre>
)
