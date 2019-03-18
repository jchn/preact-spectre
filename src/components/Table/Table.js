/** @jsx h */
import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const tableModifiers = {
  scroll: 'table-scroll',
  striped: 'table-striped',
  hover: 'table-hover',
}

const Base = createComponent('table', 'table', tableModifiers)

const Table = props => <Base {...props} />

Table.propTypes = {
  scroll: PropTypes.bool,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
}

Table.defaultProps = {
  is: 'table',
}

export default Table
