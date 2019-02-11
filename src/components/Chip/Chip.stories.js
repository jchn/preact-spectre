import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Chip from './'

storiesOf('Components|Chip', module)
  .addDecorator(centered)
  .add('Default', () => (
    <div>
      <Chip>Crime</Chip>
      <Chip>Drama</Chip>
      <Chip>Biography</Chip>
      <Chip>Mystery</Chip>
    </div>
  ))
