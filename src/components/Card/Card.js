import { h } from 'preact'
import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'
import Img from '../Img'

const CardBase = createComponent('div', 'card')

const Card = props => <CardBase {...props} />

const CardImage = createComponent('div', 'card-image')
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
