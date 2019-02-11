import PropTypes from 'prop-types'
import { createComponent, withClassModifiers } from '../../utils'

const Pagination = createComponent('ul', 'pagination')

const paginationItemClassModifiers = {
  active: 'active',
  disabled: 'disabled',
  prev: 'page-prev',
  next: 'page-next',
}

const PaginationItem = withClassModifiers(paginationItemClassModifiers)(
  createComponent('li', 'page-item')
)

PaginationItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  prev: PropTypes.bool,
  next: PropTypes.bool,
}

const PaginationItemTitle = createComponent('div', 'page-item-title')
const PaginationItemSubtitle = createComponent('div', 'page-item-subtitle')

Pagination.Item = PaginationItem

PaginationItem.Title = PaginationItemTitle
PaginationItem.Subtitle = PaginationItemSubtitle

export default Pagination
