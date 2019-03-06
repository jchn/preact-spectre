/** @jsx h */
import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/preact'
import Code from './'

storiesOf('Elements|Code', module).add('Default', () => (
  <Code lang="HTML">&lt;div&gt;foo&lt;/div&gt;</Code>
))
