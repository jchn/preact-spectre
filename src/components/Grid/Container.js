import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent, withClassModifiers } from '../../utils'

const ColumnsClassModifiers = {}

const Columns = withClassModifiers(ColumnsClassModifiers)(
  createComponent('div', 'container')
)

Columns.propTypes = {}

export default Columns
