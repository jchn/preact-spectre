import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent, withClassModifiers } from '../../utils'

const HeroClassModifiers = {}

const Hero = withClassModifiers(HeroClassModifiers)(
  createComponent('div', 'hero')
)

Hero.propTypes = {}

export const HeroBody = createComponent('div', 'hero-body')

Hero.Body = HeroBody

export default Hero
