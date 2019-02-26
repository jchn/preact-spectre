import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const ColumnsClassModifiers = {
  size: size => `grid-${size}`,
}

const Columns = createComponent('div', 'container', ColumnsClassModifiers)

Columns.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
}

export default Columns
