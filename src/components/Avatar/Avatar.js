/** @jsx h */
import { h } from 'preact'
import PropTypes from 'prop-types'
import {
  createComponent,
  pipe,
  withClassModifiers,
  withToDOMAttrs,
} from '../../utils'

const avatarClassModifiers = {
  size: size => `avatar-${size}`,
}

const avatarDOMAttributes = {
  initial: 'data-initial',
}

const AvatarBase = createComponent(
  'figure',
  'avatar',
  avatarClassModifiers,
  avatarDOMAttributes
)

const Avatar = ({ src, alt, icon, presence, ...props }) => (
  <AvatarBase {...props}>
    {src && <img src={src} alt={alt} />}
    {icon && <img class="avatar-icon" src={icon} alt="avatar-icon" />}
    {presence && <i class={`avatar-presence ${presence}`} />}
  </AvatarBase>
)

Avatar.defaultProps = {
  is: 'figure',
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  initial: PropTypes.string,
  icon: PropTypes.string,
  presence: PropTypes.oneOf(['online', 'busy', 'away']),
  size: PropTypes.oneOf(['xs', 'sm', 'lg', 'xl']),
}

export default Avatar
