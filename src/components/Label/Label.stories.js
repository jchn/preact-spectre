/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { storiesOf } from '@storybook/preact'
import Label from './'

storiesOf('Elements|Label', module)
  .addDecorator(Centered)
  .add('Default', () => <Label>default label</Label>)
  .add('rounded', () => <Label rounded>rounded default label</Label>)

storiesOf('Elements|Label/kind', module)
  .addDecorator(Centered)
  .add('primary', () => <Label kind="primary">primary label</Label>)
  .add('secondary', () => <Label kind="secondary">secondary label</Label>)
  .add('success', () => <Label kind="success">success label</Label>)
  .add('warning', () => <Label kind="warning">warning label</Label>)
  .add('error', () => <Label kind="error">error label</Label>)
