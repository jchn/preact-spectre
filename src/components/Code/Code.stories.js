/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { storiesOf } from '@storybook/preact'
import Code from './'

storiesOf('Elements|Code', module)
  .addDecorator(Centered)
  .add('Default', () => <Code lang="HTML">&lt;div&gt;foo&lt;/div&gt;</Code>)
