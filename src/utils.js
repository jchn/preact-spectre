/** @jsx h */
import React from 'react'
import { h } from 'preact'

export const mapPropsToClasses = (mapping, props) =>
  Object.entries(mapping)
    .filter(([key, className]) => {
      return props[key]
    })
    .map(([key, className]) => {
      if (typeof className === 'string') return className

      if (typeof className === 'function') return className(props[key])
    })
    .filter(v => v)
    .join(' ')

export const omit = (keys, obj) => {
  const newObj = Object.assign({}, obj)
  for (const k of keys) {
    delete newObj[k]
  }
  return newObj
}

export const createComponent = (
  is,
  className,
  propsToClasses = {},
  propsToRename = {}
) => ({ is: Tag = is, class: c = '', ...props }) => {
  const classNames = `${className} ${mapPropsToClasses(
    propsToClasses,
    props
  )} ${c}`.trim()
  const attributes = renameProps(propsToRename, props)

  const keysToFilter = [
    ...Object.keys(propsToClasses),
    ...Object.keys(propsToRename),
  ]

  const spreadProps = omit(keysToFilter, attributes)

  let h = React.createElement

  return <Tag class={classNames} {...spreadProps} />
}

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

export const renameProps = (mapping, props) => {
  const renameOps = Object.entries(mapping).map(([from, to]) =>
    renameProp(from, to)
  )
  return renameOps.reduce((acc, rename) => {
    return rename(acc)
  }, props)
}
