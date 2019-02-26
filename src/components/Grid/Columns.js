import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const ColumnsClassModifiers = {
  gapless: 'col-gapless',
}

const Columns = createComponent('div', 'columns', ColumnsClassModifiers)

Columns.propTypes = {
  gapless: PropTypes.bool,
}

export default Columns
