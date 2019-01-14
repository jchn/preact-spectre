import { withClassModifiers, createComponent } from './utils'

const tableModifiers = {
  scroll: 'table-scroll',
  striped: 'table-striped',
  hover: 'table-hover',
}

export default withClassModifiers(tableModifiers)(
  createComponent('table', 'table')
)
