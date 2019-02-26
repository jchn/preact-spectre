import { h } from 'preact'
import { createComponent } from '../../utils'

const Pre = createComponent('pre', 'code', {}, { lang: 'data-lang' })

export default ({ children, ...props }) => (
  <Pre {...props}>
    <code>{children}</code>
  </Pre>
)
