import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Toast from './'
import Button from '../../Button'

storiesOf('Components|Toast', module).add('Default', () => (
  <Toast>
    Toast <Button clear class="float-right" />
  </Toast>
))

storiesOf('Components|Toast/intent', module)
  .add('Success', () => (
    <Toast intent="success">
      Toast success <Button clear class="float-right" />
    </Toast>
  ))
  .add('Primary', () => (
    <Toast intent="primary">
      Toast primary <Button clear class="float-right" />
    </Toast>
  ))
  .add('Warning', () => (
    <Toast intent="warning">
      Toast warning <Button clear class="float-right" />
    </Toast>
  ))
  .add('Error', () => (
    <Toast intent="error">
      Toast error <Button clear class="float-right" />
    </Toast>
  ))
