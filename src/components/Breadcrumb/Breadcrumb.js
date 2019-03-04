import { h } from 'preact'
import React from 'react'
import { createComponent } from '../../utils'

const BreadcrumbBase = createComponent('ul', 'breadcrumb')
const Breadcrumb = props => <BreadcrumbBase {...props} />

const BreadcrumbItemBase = createComponent('li', 'breadcrumb-item')
const BreadcrumbItem = props => <BreadcrumbItemBase {...props} />

Breadcrumb.Item = BreadcrumbItem

export default Breadcrumb
