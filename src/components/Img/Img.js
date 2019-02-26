import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const ImgClassModifiers = {
  responsive: 'img-responsive',
  fit: fit => `img-fit-${fit}`,
}

const Img = createComponent('img', 'img', ImgClassModifiers)

Img.propTypes = {
  responsive: PropTypes.bool,
  fit: PropTypes.oneOf(['contain', 'cover']),
}

export default Img
