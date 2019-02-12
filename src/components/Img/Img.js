import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent, withClassModifiers } from '../../utils'

const ImgClassModifiers = {
  responsive: 'img-responsive',
  fit: fit => `img-fit-${fit}`,
}

const Img = withClassModifiers(ImgClassModifiers)(createComponent('img', 'img'))

Img.propTypes = {
  responsive: PropTypes.bool,
  fit: PropTypes.oneOf(['contain', 'cover']),
}

export default Img
