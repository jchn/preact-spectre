import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Steps from './'

storiesOf('Components|Steps', module).add('Default', () => (
  <Steps>
    <Steps.Item>
      <a href="#">Step 1</a>
    </Steps.Item>
    <Steps.Item>
      <a href="#">Step 2</a>
    </Steps.Item>
    <Steps.Item active>
      <a href="#">Step 3</a>
    </Steps.Item>
    <Steps.Item>
      <a href="#">Step 4</a>
    </Steps.Item>
  </Steps>
))