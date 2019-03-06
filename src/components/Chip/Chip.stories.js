/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { storiesOf } from '@storybook/preact'
import Chip from './'

storiesOf('Components|Chip', module).addDecorator(Centered).add('Default', () => (
  <div>
    <Chip>Crime</Chip>
    <Chip>Drama</Chip>
    <Chip>Biography</Chip>
    <Chip>Mystery</Chip>
  </div>
))
