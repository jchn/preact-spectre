/** @jsx h */
import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const ImgClassModifiers = {
  responsive: 'img-responsive',
  fit: fit => `img-fit-${fit}`,
}

const ImgBase = createComponent('img', 'img', ImgClassModifiers)

const Img = props => <ImgBase {...props} />

Img.propTypes = {
  responsive: PropTypes.bool,
  fit: PropTypes.oneOf(['contain', 'cover']),
}

export default Img
