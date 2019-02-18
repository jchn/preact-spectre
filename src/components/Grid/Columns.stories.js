import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Columns, { Container } from './'

storiesOf('Layout|Grid', module)
  .add('Default', () => (
    <Container>
      <Columns>
        <Columns.Col col={10} style={{ border: '1px solid blue' }}>
          col=10
        </Columns.Col>
        <Columns.Col col={2} style={{ border: '1px solid blue' }}>
          col=2
        </Columns.Col>
      </Columns>
    </Container>
  ))
  .add('responsive', () => (
    <Container>
      <Columns>
        <Columns.Col col={[12, 4, 6]} style={{ border: '1px solid blue' }}>
          col=[12, 4, 8]
        </Columns.Col>
        <Columns.Col col={[12, 8, 6]} style={{ border: '1px solid blue' }}>
          col=[12, 8, 6]
        </Columns.Col>
      </Columns>
    </Container>
  ))
