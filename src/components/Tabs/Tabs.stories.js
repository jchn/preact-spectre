/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { withColumn } from '../../../.storybook/withWrapper'
import { storiesOf } from '@storybook/preact'
import Tabs from './'

storiesOf('Components|Tabs', module)
  .addDecorator(withColumn([12, 8, 6]))
  .addDecorator(Centered)
  .add('Default', () => (
    <Tabs>
      <Tabs.Item active>
        <a href="#">Music</a>
      </Tabs.Item>
      <Tabs.Item>
        <a href="#">Playlist</a>
      </Tabs.Item>
      <Tabs.Item>
        <a href="#">Radio</a>
      </Tabs.Item>
    </Tabs>
  ))
  .add('with Action', () => (
    <Tabs>
      <Tabs.Item active>
        <a href="#">Music</a>
      </Tabs.Item>
      <Tabs.Item>
        <a href="#">Playlist</a>
      </Tabs.Item>
      <Tabs.Item>
        <a href="#">Radio</a>
      </Tabs.Item>
      <Tabs.Item action>
        <a href="#">action</a>
      </Tabs.Item>
    </Tabs>
  ))
  .add('block', () => (
    <Tabs block>
      <Tabs.Item active>
        <a href="#">Music</a>
      </Tabs.Item>
      <Tabs.Item>
        <a href="#">Playlist</a>
      </Tabs.Item>
      <Tabs.Item>
        <a href="#">Radio</a>
      </Tabs.Item>
    </Tabs>
  ))
