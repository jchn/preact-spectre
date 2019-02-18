import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Form from './'

storiesOf('Elements|Form', module)
  .addDecorator(centered)
  .add('Default', () => <div />)
