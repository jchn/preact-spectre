import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import Accordion from '../src/Accordion'
import Avatar from '../src/Avatar'
import Bar from '../src/Bar'
import Box from '../src/Box'
import faker from 'faker'

storiesOf('Components', module)
  .add('Accordion', () => (
    <div>
      <Accordion exclusive>
        <Accordion.Item title="Elements">Element 1</Accordion.Item>
        <Accordion.Item title="Layouts">Layout 1</Accordion.Item>
        <Accordion.Item title="Components">Component 1</Accordion.Item>
      </Accordion>
    </div>
  ))
  .add('Avatar', () => (
    <div>
      <Box mr="2">
        <Avatar
          xl
          initial="AB"
          alt="an avatar"
          src={faker.internet.avatar()}
          icon={faker.internet.avatar()}
        />
      </Box>
      <Box mr="2">
        <Avatar
          lg
          initial="AB"
          alt="an avatar"
          src={faker.internet.avatar()}
          presence="online"
        />
      </Box>
      <Box mr="2">
        <Avatar lm initial="AB" alt="an avatar" src={faker.internet.avatar()} />
      </Box>
      <Box mr="2">
        <Avatar sm initial="AB" alt="an avatar" />
      </Box>
    </div>
  ))
  .add('Bar', () => (
    <Bar>
      <Bar.Item
        role="progressbar"
        progress={50}
        background="#818bd5"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        50%
      </Bar.Item>
      <Bar.Item
        role="progressbar"
        progress={25}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </Bar>
  ))
