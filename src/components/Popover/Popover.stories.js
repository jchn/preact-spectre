import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Popover from './'
import Button from '../Button'
import Card from '../Card'

storiesOf('Components|Popover', module)
  .addDecorator(centered)
  .add('Default', () => (
    <Popover target={<Button primary>popover</Button>}>
      <Card>
        <Card.Header>card header</Card.Header>
        <Card.Body>card body</Card.Body>
        <Card.Footer>card footer</Card.Footer>
      </Card>
    </Popover>
  ))

storiesOf('Components|Popover/position', module)
  .addDecorator(centered)
  .add('top', () => (
    <Popover position="top" target={<Button primary>top popover</Button>}>
      <Card>
        <Card.Header>card header</Card.Header>
        <Card.Body>card body</Card.Body>
        <Card.Footer>card footer</Card.Footer>
      </Card>
    </Popover>
  ))
  .add('right', () => (
    <Popover position="right" target={<Button primary>right popover</Button>}>
      <Card>
        <Card.Header>card header</Card.Header>
        <Card.Body>card body</Card.Body>
        <Card.Footer>card footer</Card.Footer>
      </Card>
    </Popover>
  ))
  .add('bottom', () => (
    <Popover position="bottom" target={<Button primary>bottom popover</Button>}>
      <Card>
        <Card.Header>card header</Card.Header>
        <Card.Body>card body</Card.Body>
        <Card.Footer>card footer</Card.Footer>
      </Card>
    </Popover>
  ))
  .add('left', () => (
    <Popover position="left" target={<Button primary>left popover</Button>}>
      <Card>
        <Card.Header>card header</Card.Header>
        <Card.Body>card body</Card.Body>
        <Card.Footer>card footer</Card.Footer>
      </Card>
    </Popover>
  ))
