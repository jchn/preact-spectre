import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent, withClassModifiers } from '../../utils'

const ColumnsClassModifiers = {
  gapless: 'col-gapless',
}

const Columns = withClassModifiers(ColumnsClassModifiers)(
  createComponent('div', 'columns')
)

Columns.propTypes = {
  gapless: PropTypes.bool,
}

export default Columns
