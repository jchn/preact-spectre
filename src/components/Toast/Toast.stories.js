/** @jsx h */
import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/preact'
import Toast from './'
import Button from '../Button'

storiesOf('Components|Toast', module).add('Default', () => (
  <Toast>
    Toast <Button clear class="float-right" />
  </Toast>
))

storiesOf('Components|Toast/kind', module)
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
