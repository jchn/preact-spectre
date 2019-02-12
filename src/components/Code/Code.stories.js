import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Code from './'

storiesOf('Elements|Code', module)
  .addDecorator(centered)
  .add('Default', () => <Code lang="HTML">&lt;div&gt;foo&lt;/div&gt;</Code>)
