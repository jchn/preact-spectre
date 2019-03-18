/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { withColumn } from '../../../.storybook/withWrapper'
import { storiesOf } from '@storybook/preact'
import Form from './'

storiesOf('Elements|Form/Select', module)
  .addDecorator(withColumn([12, 8, 6]))
  .addDecorator(Centered)
  .add('Default', () => (
    <Form.Group>
      <Form.Select>
        <option>Choose an option</option>
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
      </Form.Select>
    </Form.Group>
  ))
  .add('multiple', () => (
    <Form.Group>
      <Form.Select multiple>
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
      </Form.Select>
    </Form.Group>
  ))
  .add('disabled', () => (
    <Form.Group>
      <Form.Select disabled>
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
      </Form.Select>
    </Form.Group>
  ))
  .add('success', () => (
    <Form.Select success>
      <option>Slack</option>
      <option>Skype</option>
      <option>Hipchat</option>
    </Form.Select>
  ))
  .add('error', () => (
    <Form.Select error>
      <option>Slack</option>
      <option>Skype</option>
      <option>Hipchat</option>
    </Form.Select>
  ))
