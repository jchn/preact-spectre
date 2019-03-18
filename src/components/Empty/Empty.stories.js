/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { withColumn } from '../../../.storybook/withWrapper'
import { storiesOf } from '@storybook/preact'
import Empty from './'
import Button from '../Button'

storiesOf('Components|Empty', module)
  .addDecorator(withColumn([12, 8, 6]))
  .addDecorator(Centered)
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
        <Button kind="primary">Send a message</Button>
      </Empty.Action>
    </Empty>
  ))
