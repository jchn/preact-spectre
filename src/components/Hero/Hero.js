import { createComponent } from '../../utils'

const HeroClassModifiers = {}

const Hero = createComponent('div', 'hero', HeroClassModifiers)

Hero.propTypes = {}

export const HeroBody = createComponent('div', 'hero-body')

Hero.Body = HeroBody

export default Hero
