/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { storiesOf } from '@storybook/preact'
import Button from './'

storiesOf('Elements|Button', module)
  .addDecorator(Centered)
  .add('Default', () => <Button>default button</Button>)
  .add('link', () => <Button link>link button</Button>)
  .add('loading', () => <Button loading>loading button</Button>)
  .add('active', () => <Button active>active button</Button>)
  .add('disabled', () => <Button disabled>disabled button</Button>)

storiesOf('Elements|Button/kind', module)
  .addDecorator(Centered)
  .add('primary', () => <Button kind="primary">primary button</Button>)
  .add('success', () => <Button kind="success">success button</Button>)
  .add('error', () => <Button kind="error">error button</Button>)

storiesOf('Elements|Button/shape', module)
  .addDecorator(Centered)
  .add('square', () => (
    <Button shape="square" kind="primary">
      <i class="icon icon-menu" />
    </Button>
  ))
  .add('circle', () => (
    <Button shape="circle" kind="primary">
      <i class="icon icon-menu" />
    </Button>
  ))
