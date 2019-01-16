import { h } from 'preact'
import PropTypes from 'prop-types'
import { pipe, withClassModifiers, withToDOMAttrs } from './utils'

const avatarClassModifiers = {
  xs: 'avatar-xs',
  sm: 'avatar-sm',
  lg: 'avatar-lg',
  xl: 'avatar-xl',
}

const avatarDOMAttributes = {
  initial: 'data-initial',
}

const AvatarBase = ({
  src,
  alt,
  initial,
  icon,
  presence,
  style,
  class: className,
  ...props
}) => (
  <figure class={`avatar ${className}`} {...props}>
    {src && <img src={src} alt={alt} />}
    {icon && <img class="avatar-icon" src={icon} alt="avatar-icon" />}
    {presence && <i class={`avatar-presence ${presence}`} />}
  </figure>
)

const Avatar = pipe(
  withClassModifiers(avatarClassModifiers),
  withToDOMAttrs(avatarDOMAttributes)
)(AvatarBase)

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  initial: PropTypes.string,
  icon: PropTypes.string,
  presence: PropTypes.oneOf(['online', 'busy', 'away']),
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
}

export default Avatar
