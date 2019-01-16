import { h } from 'preact'
import { pipe, withClassModifiers, withToDOMAttrs } from './utils'

const modifiers = {
  // colors
  color: type => `text-${type}`,
  bg: type => `bg-${type}`,

  // cursors
  cursor: type => `c-${type}`,

  // display
  display: type => `d-${type}`,
  textHide: 'text-hide',
  textAssistive: 'text-assistive',
  visible: 'd-visible',
  invisible: 'd-invisible',

  // loading
  loading: 'loading',
  loadingLg: 'loading loading-lg',

  // position
  clearfix: 'clearfix',
  float: type => `float-${type}`,
  position: type => `p-${type}`,
  centered: 'p-centered',

  m: step => `m-${step}`,
  mt: step => `mt-${step}`,
  mr: step => `mr-${step}`,
  mb: step => `mb-${step}`,
  ml: step => `ml-${step}`,
  mx: step => `mx-${step}`,
  my: step => `my-${step}`,

  p: step => `p-${step}`,
  pt: step => `pt-${step}`,
  pr: step => `pr-${step}`,
  pb: step => `pb-${step}`,
  pl: step => `pl-${step}`,
  px: step => `px-${step}`,
  py: step => `py-${step}`,

  // shape
  shape: type => `s-${type}`,

  // text
  textAlign: align => `text-${align}`,
  textTransform: transform => `text-${transform}`,
  fontWeight: weight => `text-${weight}`,
  textOverflow: type => `text-${type}`,

  badge: 'badge',
  tooltip: 'tooltip',
}

const DOMAttributes = {
  badgeText: 'data-badge',
  tooltipText: 'data-tooltip',
}

const Box = ({ is: Tag, ...props }) => <Tag {...props} />

export default pipe(
  withClassModifiers(modifiers),
  withToDOMAttrs(DOMAttributes, true)
)(Box)
