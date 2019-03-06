/** @jsx h */
import { h } from 'preact'
import { storiesOf } from '@storybook/preact'
import Grid from './'

const times = (cb, i) => new Array(i).fill(null).map((_, i) => cb(i))

storiesOf('Layout|Grid', module)
  .add('Default', () => (
    <Grid>
      <Grid.Columns>
        {times(i => {
          const n = Math.ceil(i / 2) + 1
          const col = i % 2 === 0 ? n : 12 - n + 1

          return (
            <Grid.Col col={col} key={i}>
              <div class="p-2 mb-2 bg-primary">{col}</div>
            </Grid.Col>
          )
        }, 23)}
      </Grid.Columns>
    </Grid>
  ))
  .add('gapless', () => (
    <Grid>
      <Grid.Columns gapless>
        {times(i => {
          const n = Math.ceil(i / 2) + 1
          const col = i % 2 === 0 ? n : 12 - n + 1

          return (
            <Grid.Col col={col} key={i}>
              <div class="p-2 mb-2 bg-primary">{col}</div>
            </Grid.Col>
          )
        }, 23)}
      </Grid.Columns>
    </Grid>
  ))
  .add('responsive', () => (
    <Grid>
      <Grid.Columns>
        {times(i => {
          const n = Math.ceil(i / 2) + 1
          const cols = i % 2 === 0 ? [12, 6, n] : [12, 6, 12 - n + 1]

          return (
            <Grid.Col col={cols} key={i}>
              <div class="p-2 mb-2 bg-primary">{cols.join(',')}</div>
            </Grid.Col>
          )
        }, 23)}
      </Grid.Columns>
    </Grid>
  ))
