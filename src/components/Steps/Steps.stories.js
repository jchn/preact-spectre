/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { withColumn } from '../../../.storybook/withWrapper'
import { storiesOf } from '@storybook/preact'
import Steps from './'

storiesOf('Components|Steps', module)
  .addDecorator(withColumn([12, 8]))
  .addDecorator(Centered)
  .add('Default', () => (
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
