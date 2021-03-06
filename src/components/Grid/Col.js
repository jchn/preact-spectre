import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl']

const generateColClass = nCols => {
  if (typeof nCols === 'number') return `col-${nCols}`

  if (Array.isArray(nCols)) {
    return nCols
      .map((n, i) =>
        i + 1 === nCols.length ? `col-${n}` : `col-${sizes[i]}-${n}`
      )
      .join(' ')
  }
}

const ColumnsClassModifiers = {
  col: generateColClass,
}

const Columns = createComponent('div', 'column', ColumnsClassModifiers)

Columns.propTypes = {
  col: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
}

export default Columns
