import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent, withClassModifiers } from '../../utils'

const FigureClassModifiers = {}

const Figure = withClassModifiers(FigureClassModifiers)(
  createComponent('figure', 'figure')
)

Figure.propTypes = {}

export const Figcaption = createComponent('figcaption', 'figure-caption')

Figure.Caption = Figcaption

export default Figure
