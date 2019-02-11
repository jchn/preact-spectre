import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Card from './'
import faker from 'faker'

storiesOf('Components|Card', module)
  .addDecorator(centered)
  .add('Default', () => (
    <Card>
      <Card.Header>
        <Card.Title>Card title</Card.Title>
        <Card.Subtitle>Card subtitle</Card.Subtitle>
      </Card.Header>
      <Card.Body>Card body</Card.Body>
      <Card.Footer>Card footer</Card.Footer>
    </Card>
  ))
  .add('Image', () => (
    <Card>
      <Card.Image src={faker.image.nature()} alt="card image" />
      <Card.Header>
        <Card.Title>Card title</Card.Title>
        <Card.Subtitle>Card subtitle</Card.Subtitle>
      </Card.Header>
      <Card.Body>Card body</Card.Body>
      <Card.Footer>Card footer</Card.Footer>
    </Card>
  ))
