/** @jsx h */
import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/preact'
import Avatar from './'
import faker from 'faker'

storiesOf('Components|Avatar/presence', module)
  .add('online', () => (
    <Avatar
      presence="online"
      size="xl"
      initial="AB"
      alt="an avatar"
      src={faker.internet.avatar()}
    />
  ))
  .add('offline', () => (
    <Avatar
      presence="offline"
      size="xl"
      initial="AB"
      alt="an avatar"
      src={faker.internet.avatar()}
    />
  ))
  .add('away', () => (
    <Avatar
      presence="away"
      size="xl"
      initial="AB"
      alt="an avatar"
      src={faker.internet.avatar()}
    />
  ))

storiesOf('Components|Avatar/size', module)
  .add('xs', () => (
    <Avatar
      size="xs"
      initial="AB"
      alt="an avatar"
      src={faker.internet.avatar()}
    />
  ))
  .add('sm', () => (
    <Avatar
      size="sm"
      initial="AB"
      alt="an avatar"
      src={faker.internet.avatar()}
    />
  ))
  .add('md', () => (
    <Avatar
      size="md"
      initial="AB"
      alt="an avatar"
      src={faker.internet.avatar()}
    />
  ))
  .add('lg', () => (
    <Avatar
      size="lg"
      initial="AB"
      alt="an avatar"
      src={faker.internet.avatar()}
    />
  ))
  .add('xl', () => (
    <Avatar
      size="xl"
      initial="AB"
      alt="an avatar"
      src={faker.internet.avatar()}
    />
  ))
