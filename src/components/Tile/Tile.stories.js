import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Tile from './'
import Avatar from '../Avatar'
import Button from '../../Button'
import faker from 'faker'

storiesOf('Components|Tile', module)
  .add('Default', () => (
    <Tile>
      <Tile.Icon>
        <Avatar size="lg" src={faker.internet.avatar()} />
      </Tile.Icon>
      <Tile.Content>
        <Tile.Content.Title>The Avengers</Tile.Content.Title>
        <Tile.Content.Subtitle>
          Earth's Mightiest Heroes joined forces to take on threats that were
          too big for any one hero to tackle...
        </Tile.Content.Subtitle>
        <Button primary>Join</Button> <Button>Contact</Button>
      </Tile.Content>
    </Tile>
  ))
  .add('compact', () => (
    <Tile centered>
      <Tile.Icon>
        <Avatar size="lg" src={faker.internet.avatar()} />
      </Tile.Icon>
      <Tile.Content>
        <Tile.Content.Title>The Avengers</Tile.Content.Title>
        <Tile.Content.Subtitle>
          Earth's Mightiest Heroes joined forces to take on threats that were
          too big for any one hero to tackle...
        </Tile.Content.Subtitle>
      </Tile.Content>
      <Tile.Action>
        <Button primary>Join</Button>
      </Tile.Action>
    </Tile>
  ))
