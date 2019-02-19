import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import Columns, { Container } from './'

const times = (cb, i) => new Array(i).fill(null).map((_, i) => cb(i))

storiesOf('Layout|Grid', module)
  .add('Default', () => (
    <Container>
      <Columns>
        {times(i => {
          const n = Math.ceil(i / 2) + 1
          const col = i % 2 === 0 ? n : 12 - n + 1

          return (
            <Columns.Col col={col} key={i}>
              <div class="p-2 mb-2 bg-primary">{col}</div>
            </Columns.Col>
          )
        }, 23)}
      </Columns>
    </Container>
  ))
  .add('gapless', () => (
    <Container>
      <Columns gapless>
        {times(i => {
          const n = Math.ceil(i / 2) + 1
          const col = i % 2 === 0 ? n : 12 - n + 1

          return (
            <Columns.Col col={col} key={i}>
              <div class="p-2 mb-2 bg-primary">{col}</div>
            </Columns.Col>
          )
        }, 23)}
      </Columns>
    </Container>
  ))
  .add('responsive', () => (
    <Container>
      <Columns>
        {times(i => {
          const n = Math.ceil(i / 2) + 1
          const cols = i % 2 === 0 ? [12, 6, n] : [12, 6, 12 - n + 1]

          return (
            <Columns.Col col={cols} key={i}>
              <div class="p-2 mb-2 bg-primary">{cols.join(',')}</div>
            </Columns.Col>
          )
        }, 23)}
      </Columns>
    </Container>
  ))
