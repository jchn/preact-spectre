import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Menu from './'
import Label from '../../Label'

storiesOf('Components|Menu', module)
  .addDecorator(centered)
  .add('Default', () => (
    <Menu>
      <Menu.Divider title="Links" />
      <Menu.Item>
        <a href="#">
          <i class="icon icon-link" /> Slack
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="#">Hipchat</a>
        <Menu.Badge>
          <Label primary>2</Label>
        </Menu.Badge>
      </Menu.Item>
      <Menu.Item>
        <a href="#">Skype</a>
      </Menu.Item>
    </Menu>
  ))
