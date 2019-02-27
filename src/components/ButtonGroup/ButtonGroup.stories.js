import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import ButtonGroup from './'
import Button from '../Button'
import withDocs from '../../../addon/withDocs'

storiesOf('Elements|ButtonGroup', module)
  .addDecorator(withDocs)
  .add(
    'Default',
    () => (
      <ButtonGroup>
        <Button>first button</Button>
        <Button>second button</Button>
        <Button>third button</Button>
      </ButtonGroup>
    ),
    {
      docs: {
        source: `
          <ButtonGroup>
            <Button>first button</Button>
            <Button>second button</Button>
            <Button>third button</Button>
          </ButtonGroup>
      `,
      },
    }
  )
  .add(
    'block',
    () => (
      <ButtonGroup block>
        <Button>first button</Button>
        <Button>second button</Button>
        <Button>third button</Button>
      </ButtonGroup>
    ),
    {
      docs: {
        source: `
        <ButtonGroup block>
          <Button>first button</Button>
          <Button>second button</Button>
          <Button>third button</Button>
        </ButtonGroup>
      `,
      },
    }
  )
