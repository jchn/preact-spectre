/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { withColumn } from '../../../.storybook/withWrapper'
import { storiesOf } from '@storybook/preact'
import Toast from './'
import Button from '../Button'

storiesOf('Components|Toast', module)
  .addDecorator(withColumn([12, 6]))
  .addDecorator(Centered)
  .add('Default', () => (
    <Toast>
      Default Toast <Button clear class="float-right" />
    </Toast>
  ))

storiesOf('Components|Toast/kind', module)
  .addDecorator(withColumn([12, 6]))
  .addDecorator(Centered)
  .add('Success', () => (
    <Toast kind="success">
      Toast success <Button clear class="float-right" />
    </Toast>
  ))
  .add('Primary', () => (
    <Toast kind="primary">
      Toast primary <Button clear class="float-right" />
    </Toast>
  ))
  .add('Warning', () => (
    <Toast kind="warning">
      Toast warning <Button clear class="float-right" />
    </Toast>
  ))
  .add('Error', () => (
    <Toast kind="error">
      Toast error <Button clear class="float-right" />
    </Toast>
  ))
