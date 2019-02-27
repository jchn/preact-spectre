import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Button from './'
import withDocs from '../../../addon/withDocs'

storiesOf('Elements|Button', module)
  .addDecorator(withDocs)
  .add('Default', () => <Button>default button</Button>, {
    docs: {
      source: '<Button>default button</Button>',
    },
  })
  .add('link', () => <Button link>link button</Button>, {
    docs: {
      source: '<Button link>link button</Button>',
    },
  })
  .add('loading', () => <Button loading>loading button</Button>, {
    docs: {
      source: '<Button loading>loading button</Button>',
    },
  })
  .add('active', () => <Button active>active button</Button>, {
    docs: {
      source: '<Button active>active button</Button>',
    },
  })
  .add('disabled', () => <Button disabled>disabled button</Button>, {
    docs: {
      source: '<Button disabled>disabled button</Button>',
    },
  })

storiesOf('Elements|Button/intent', module)
  .addDecorator(withDocs)
  .add('primary', () => <Button intent="primary">primary button</Button>, {
    docs: {
      source: '<Button intent="primary">primary button</Button>',
    },
  })
  .add('success', () => <Button intent="success">success button</Button>, {
    docs: {
      source: '<Button intent="success">success button</Button>',
    },
  })
  .add('error', () => <Button intent="error">error button</Button>, {
    docs: {
      source: '<Button intent="error">error button</Button>',
    },
  })

storiesOf('Elements|Button/shape', module)
  .addDecorator(withDocs)
  .add('square', () => <Button shape="square" intent="primary" />, {
    docs: {
      source: '<Button shape="square" intent="primary" />',
    },
  })
  .add('circle', () => <Button shape="circle" intent="primary" />, {
    docs: {
      source: '<Button shape="circle" intent="primary" />',
    },
  })
