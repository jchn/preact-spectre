import { createComponent } from './utils'

const Breadcrumb = createComponent('ul', 'breadcrumb')
const BreadcrumbItem = createComponent('li', 'breadcrumb-item')

Breadcrumb.Item = BreadcrumbItem

export default Breadcrumb
