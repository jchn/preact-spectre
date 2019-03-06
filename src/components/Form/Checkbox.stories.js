/** @jsx h */
import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/preact'
import Form from './'

storiesOf('Elements|Form/Checkbox', module)
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
