import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Label from './'

storiesOf('Elements|Label', module)
  .addDecorator(centered)
  .add('Default', () => <Label>default label</Label>)
  .add('rounded', () => <Label rounded>rounded default label</Label>)

storiesOf('Elements|Label/intent', module)
  .addDecorator(centered)
  .add('primary', () => <Label intent="primary">primary label</Label>)
  .add('secondary', () => <Label intent="secondary">secondary label</Label>)
  .add('success', () => <Label intent="success">success label</Label>)
  .add('warning', () => <Label intent="warning">warning label</Label>)
  .add('error', () => <Label intent="error">error label</Label>)
