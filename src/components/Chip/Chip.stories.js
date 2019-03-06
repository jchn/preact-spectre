/** @jsx h */
import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/preact'
import Chip from './'

storiesOf('Components|Chip', module).add('Default', () => (
  <div>
    <Chip>Crime</Chip>
    <Chip>Drama</Chip>
    <Chip>Biography</Chip>
    <Chip>Mystery</Chip>
  </div>
))
