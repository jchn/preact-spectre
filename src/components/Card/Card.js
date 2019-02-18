import { h } from 'preact'
import { createComponent } from '../../utils'
import Img from '../Img'

const Card = createComponent('div', 'card')

const CardImage = ({ src, alt, ...props }) => (
  <div class="card-image" {...props}>
    <Img src={src} alt={alt} responsive />
  </div>
)

const CardHeader = createComponent('div', 'card-header')
const CardTitle = createComponent('div', 'card-title')
const CardSubtitle = createComponent('div', 'card-subtitle')
const CardBody = createComponent('div', 'card-body')
const CardFooter = createComponent('div', 'card-footer')

Card.Header = CardHeader
Card.Title = CardTitle
Card.Subtitle = CardSubtitle
Card.Body = CardBody
Card.Footer = CardFooter
Card.Image = CardImage

export default Card
