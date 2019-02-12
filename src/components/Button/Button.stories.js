import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Button from './'

storiesOf('Elements|Button', module)
  .addDecorator(centered)
  .add('Default', () => <Button>default button</Button>)
  .add('link', () => <Button link>link button</Button>)
  .add('loading', () => <Button loading>loading button</Button>)
  .add('active', () => <Button active>active button</Button>)
  .add('disabled', () => <Button disabled>disabled button</Button>)

storiesOf('Elements|Button/intent', module)
  .addDecorator(centered)
  .add('primary', () => <Button intent="primary">primary button</Button>)
  .add('success', () => <Button intent="success">success button</Button>)
  .add('error', () => <Button intent="error">error button</Button>)

storiesOf('Elements|Button/shape', module)
  .addDecorator(centered)
  .add('square', () => <Button shape="square" intent="primary" />)
  .add('circle', () => <Button shape="circle" intent="primary" />)
