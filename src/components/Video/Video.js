import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent, withClassModifiers } from '../../utils'

const VideoClassModifiers = {
  responsive: responsive =>
    `video-responsive ${
      responsive && typeof responsive === 'string'
        ? 'video-responsive-' + responsive
        : ''
    }`,
}

const Video = withClassModifiers(VideoClassModifiers)(
  createComponent('div', 'video')
)

Video.propTypes = {}

export default Video
