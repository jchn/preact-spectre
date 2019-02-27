import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Tabs from './'
import withDocs from '../../../addon/withDocs'

storiesOf('Components|Tabs', module)
  .addDecorator(withDocs)
  .add(
    'Default',
    () => (
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
    ),
    {
      docs: {
        source: `
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
      `,
      },
    }
  )
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
