/** @jsx h */
import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/preact'
import Form from './'
import faker from 'faker'

storiesOf('Elements|Form/Input', module)
  .add('Default', () => <Form.Input placeholder="Name" id="input-name" />)
  .add('disabled', () => (
    <Form.Input disabled placeholder="Name" id="input-name" />
  ))
  .add('success', () => (
    <Form.Input success placeholder="Name" id="input-name" />
  ))
  .add('error', () => <Form.Input error placeholder="Name" id="input-name" />)

storiesOf('Elements|Form/Input/validation', module)
  .add('error', () => (
    <Form.Group error>
      <Form.Label for="input-email">Email</Form.Label>
      <Form.Input type="email" placeholder="Email" id="input-email" />
      <Form.Hint>Please enter an email address</Form.Hint>
    </Form.Group>
  ))
  .add('success', () => (
    <Form.Group success>
      <Form.Label for="input-email">Email</Form.Label>
      <Form.Input
        placeholder="Name"
        id="input-email"
        value={faker.name.firstName()}
      />
      <Form.Hint>This name is available</Form.Hint>
    </Form.Group>
  ))
