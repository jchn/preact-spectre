import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const FigureClassModifiers = {}

const Figure = createComponent('figure', 'figure', FigureClassModifiers)

Figure.propTypes = {}

export const Figcaption = createComponent('figcaption', 'figure-caption')

Figure.Caption = Figcaption

export default Figure
