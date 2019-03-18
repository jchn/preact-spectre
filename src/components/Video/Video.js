/** @jsx h */
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

const VideoBase = createComponent('div', 'video', videoClassModifiers)

const Video = props => <VideoBase {...props} />

Video.propTypes = {
  responsive: PropTypes.oneOfType([
    PropTypes.oneOf(['4-3', '1-1']),
    PropTypes.bool,
  ]),
}

export default Video
