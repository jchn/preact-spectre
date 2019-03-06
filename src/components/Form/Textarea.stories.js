/** @jsx h */
import { h } from 'preact'
import centered from '@storybook/addon-centered/preact'
import { storiesOf } from '@storybook/preact'
import Form from './'

storiesOf('Elements|Form/Textarea', module)
  .add('Default', () => (
    <Form.Textarea placeholder="Textarea" rows="3" id="input-textarea" />
  ))
  .add('disabled', () => (
    <Form.Textarea
      disabled
      placeholder="Textarea"
      rows="3"
      id="input-textarea"
    />
  ))
  .add('success', () => (
    <Form.Textarea
      success
      placeholder="Textarea"
      rows="3"
      id="input-textarea"
    />
  ))
  .add('error', () => (
    <Form.Textarea error placeholder="Textarea" rows="3" id="input-textarea" />
  ))
