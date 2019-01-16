import { h } from 'preact'

export const pipe = (head, ...tail) => (...args) =>
  tail.reduce((acc, curr) => curr.call(null, acc), head.apply(null, args))

export const classModifiers = mapping => props =>
  Object.entries(mapping)
    .filter(([key, className]) => {
      return props[key]
    })
    .map(([key, className]) =>
      typeof className === 'function' ? className(props[key]) : className
    )
    .join(' ')

export const withClassModifiers = modifiers => Component => props => {
  const modifierKeys = Object.keys(modifiers)

  const filteredProps = Object.entries(props)
    .filter(([k, v]) => {
      return !modifierKeys.includes(k)
    })
    .reduce((acc, [k, v]) => {
      return Object.assign(acc, { [k]: v })
    }, {})

  return (
    <Component {...filteredProps} class={classModifiers(modifiers)(props)} />
  )
}

export const createComponent = (Tag, classes) => props => (
  <Tag {...props} class={`${classes} ${props.class || ''}`.trim()} />
)

const renameProp = (from, to) => obj => {
  if (!obj.hasOwnProperty(from)) return obj

  return Object.entries(obj)
    .filter(([key]) => {
      return key !== from
    })
    .reduce(
      (acc, [k, v]) => {
        return Object.assign(acc, { [k]: v })
      },
      { [to]: obj[from] }
    )
}

// TODO: rename to renameProps
export const toDOMAttrs = mapping => props => {
  const renameOps = Object.entries(mapping).map(([from, to]) =>
    renameProp(from, to)
  )
  return renameOps.reduce((acc, rename) => {
    return rename(acc)
  }, props)
}

// TODO: rename to withRenameProps
export const withToDOMAttrs = (
  mapping,
  keepOriginal = false
) => Component => props => {
  return (
    <Component
      {...Object.assign(toDOMAttrs(mapping)(props), keepOriginal ? props : {})}
    />
  )
}
