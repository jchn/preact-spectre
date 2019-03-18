/** @jsx h */
import { h } from 'preact'
import { storiesOf } from '@storybook/preact'
import Centered from '@storybook/addon-centered/preact'
import Breadcrumb from './'

storiesOf('Components|Breadcrumb', module)
  .addDecorator(Centered)
  .add('Default', () => (
    <Breadcrumb>
      <Breadcrumb.Item>
        <a href="#">Home</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Settings</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Change avatar</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  ))
