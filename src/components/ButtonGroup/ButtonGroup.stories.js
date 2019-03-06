/** @jsx h */
import { h } from 'preact'
import { storiesOf } from '@storybook/preact'
import Centered from '@storybook/addon-centered/preact'
import ButtonGroup from './'
import Button from '../Button'

storiesOf('Elements|ButtonGroup', module)
  .addDecorator(Centered)
  .add('Default', () => (
    <ButtonGroup>
      <Button>first button</Button>
      <Button>second button</Button>
      <Button>third button</Button>
    </ButtonGroup>
  ))
  .add('block', () => (
    <ButtonGroup block>
      <Button>first button</Button>
      <Button>second button</Button>
      <Button>third button</Button>
    </ButtonGroup>
  ))
