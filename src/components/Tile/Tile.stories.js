/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { withColumn } from '../../../.storybook/withWrapper'
import { storiesOf } from '@storybook/preact'
import Tile from './'
import Avatar from '../Avatar'
import Button from '../Button'
import faker from 'faker'

storiesOf('Components|Tile', module)
  .addDecorator(withColumn([12, 6]))
  .addDecorator(Centered)
  .add('Default', () => (
    <Tile>
      <Tile.Icon>
        <Avatar size="lg" src={faker.internet.avatar()} />
      </Tile.Icon>
      <Tile.Content>
        <Tile.Title>The Avengers</Tile.Title>
        <Tile.Subtitle>
          Earth's Mightiest Heroes joined forces to take on threats that were
          too big for any one hero to tackle...
        </Tile.Subtitle>
        <Button kind="primary">Join</Button> <Button>Contact</Button>
      </Tile.Content>
    </Tile>
  ))
  .add('compact', () => (
    <Tile centered>
      <Tile.Icon>
        <Avatar size="lg" src={faker.internet.avatar()} />
      </Tile.Icon>
      <Tile.Content>
        <Tile.Title>The Avengers</Tile.Title>
        <Tile.Subtitle>
          Earth's Mightiest Heroes joined forces to take on threats that were
          too big for any one hero to tackle...
        </Tile.Subtitle>
      </Tile.Content>
      <Tile.Action>
        <Button kind="primary">Join</Button>
      </Tile.Action>
    </Tile>
  ))
