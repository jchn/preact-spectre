import { h } from 'preact'

const createComponent = (Tag, classes) => props => (
  <Tag {...props} class={`${classes} ${props.class}`} />
)

const classModifiers = mapping => props =>
  Object.entries(mapping)
    .filter(([key, className]) => {
      return props[key]
    })
    .map(([key, className]) => className)
    .join(' ')

const withClassModifiers = modifiers => Component => props => (
  <Component {...props} class={classModifiers(modifiers)(props)} />
)

const tableModifiers = {
  scroll: 'table-scroll',
  striped: 'table-striped',
  hover: 'table-hover',
}

export const Table = withClassModifiers(tableModifiers)(
  createComponent('table', 'table')
)
