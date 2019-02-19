import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent, withClassModifiers } from '../../utils'

const ColumnsClassModifiers = {
  size: size => `grid-${size}`,
}

const Columns = withClassModifiers(ColumnsClassModifiers)(
  createComponent('div', 'container')
)

Columns.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
}

export default Columns
