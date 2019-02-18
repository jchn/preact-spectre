import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Form from './'

storiesOf('Elements|Form/Checkbox', module)
  .addDecorator(centered)
  .add('Default', () => (
    <Form.Group>
      <Form.Checkbox label="Remember me" />
      <Form.Checkbox label="Select all" indeterminate />
    </Form.Group>
  ))
  .add('disabled', () => (
    <Form.Group>
      <Form.Checkbox disabled label="Remember me" />
      <Form.Checkbox disabled label="Select all" indeterminate />
    </Form.Group>
  ))
  .add('error', () => <Form.Checkbox error label="Select all" indeterminate />)
