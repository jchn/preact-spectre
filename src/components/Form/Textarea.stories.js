/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { withDecorator, withColumn } from '../../../.storybook/withWrapper'
import { storiesOf } from '@storybook/preact'
import Form from './'

storiesOf('Elements|Form/Textarea', module)
  .addDecorator(withColumn([12, 8, 6]))
  .addDecorator(Centered)
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
