import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import Bar from './'

storiesOf('Components|Bar', module).add('items', () => (
  <Bar>
    <Bar.Item
      role="progressbar"
      progress={50}
      background="#818bd5"
      aria-valuenow="50"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      50%
    </Bar.Item>
    <Bar.Item
      role="progressbar"
      progress={25}
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"
    />
  </Bar>
))

storiesOf('Components|Bar', module).add('slider', () => (
  <Bar slider>
    <Bar.Item
      role="progressbar"
      progress={25}
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <Bar.SliderButton />
    </Bar.Item>
  </Bar>
))
