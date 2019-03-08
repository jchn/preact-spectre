/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { storiesOf } from '@storybook/preact'
import Form from './'

storiesOf('Elements|Form/Switch', module)
  .addDecorator(Centered)
  .add('Default', () => (
    <Form.Group>
      <Form.Switch label="Remember me" />
    </Form.Group>
  ))
  .add('disabled', () => (
    <Form.Group>
      <Form.Switch disabled label="Remember me" />
    </Form.Group>
  ))
  .add('error', () => <Form.Switch error label="Remember me" />)
