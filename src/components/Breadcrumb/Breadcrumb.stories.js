import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Breadcrumb from './'

storiesOf('Components|Breadcrumb', module)
  .addDecorator(centered)
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
