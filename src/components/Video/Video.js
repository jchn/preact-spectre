import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const videoClassModifiers = {
  responsive: responsive =>
    `video-responsive ${
      responsive && typeof responsive === 'string'
        ? 'video-responsive-' + responsive
        : ''
    }`,
}

const Video = createComponent('div', 'video', videoClassModifiers)

Video.propTypes = {}

export default Video
