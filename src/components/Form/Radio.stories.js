/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { storiesOf } from '@storybook/preact'
import Form from './'

storiesOf('Elements|Form/Radio', module)
  .addDecorator(Centered)
  .add('Default', () => (
    <Form.Group>
      <Form.Radio name="option" label="Remember me" />
      <Form.Radio name="option" label="Select all" indeterminate />
    </Form.Group>
  ))
  .add('disabled', () => (
    <Form.Group>
      <Form.Radio disabled name="option" label="Remember me" />
      <Form.Radio disabled name="option" label="Select all" indeterminate />
    </Form.Group>
  ))
  .add('error', () => <Form.Radio error name="option" label="Remember me" />)
