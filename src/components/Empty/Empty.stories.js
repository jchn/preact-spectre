import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Empty from './'
import Button from '../../Button'

storiesOf('Components|Empty', module)
  .addDecorator(centered)
  .add('Default', () => (
    <Empty>
      <Empty.Icon>
        <i class="icon icon-3x icon-people" />
      </Empty.Icon>
      <Empty.Title>You have no new messages</Empty.Title>
      <Empty.Subtitle>Click the button to start a conversation.</Empty.Subtitle>
    </Empty>
  ))
  .add('with Action', () => (
    <Empty>
      <Empty.Icon>
        <i class="icon icon-3x icon-people" />
      </Empty.Icon>
      <Empty.Title>You have no new messages</Empty.Title>
      <Empty.Subtitle>Click the button to start a conversation.</Empty.Subtitle>
      <Empty.Action>
        <Button primary>Send a message</Button>
      </Empty.Action>
    </Empty>
  ))
