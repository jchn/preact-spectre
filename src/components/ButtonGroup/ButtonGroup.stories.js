import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import ButtonGroup from './'
import Button from '../Button'

storiesOf('Elements|ButtonGroup', module)
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
