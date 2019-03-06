/** @jsx h */
import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/preact'
import Button from './'

storiesOf('Elements|Button', module)
  .add('Default', () => <Button>default button</Button>)
  .add('link', () => <Button link>link button</Button>)
  .add('loading', () => <Button loading>loading button</Button>)
  .add('active', () => <Button active>active button</Button>)
  .add('disabled', () => <Button disabled>disabled button</Button>)

storiesOf('Elements|Button/kind', module)
  .add('primary', () => <Button kind="primary">primary button</Button>)
  .add('success', () => <Button kind="success">success button</Button>)
  .add('error', () => <Button kind="error">error button</Button>)

storiesOf('Elements|Button/shape', module)
  .add('square', () => <Button shape="square" kind="primary" />)
  .add('circle', () => <Button shape="circle" kind="primary" />)
