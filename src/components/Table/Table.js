import { h } from 'preact'
import { withClassModifiers, createComponent } from '../../utils'

const tableModifiers = {
  scroll: 'table-scroll',
  striped: 'table-striped',
  hover: 'table-hover',
}

const Base = createComponent('table', 'table', tableModifiers)

const Table = props => <Base {...props} />

Table.defaultProps = {
  is: 'table',
}

export default Table
