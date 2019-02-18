import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent, withClassModifiers } from '../../utils'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl']

const generateColClass = nCols => {
  if (typeof nCols === 'number') return `col-${nCols}`

  if (Array.isArray(nCols)) {
    return nCols.map((n, i) => `col-${sizes[i]}-${n}`).join(' ')
  }
}

const ColumnsClassModifiers = {
  col: generateColClass,
}

const Columns = withClassModifiers(ColumnsClassModifiers)(
  createComponent('div', 'column')
)

Columns.propTypes = {
  col: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
}

export default Columns
