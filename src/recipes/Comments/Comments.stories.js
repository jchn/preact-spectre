/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { withColumn } from '../../../.storybook/withWrapper'
import { storiesOf } from '@storybook/preact'

import faker from 'faker'
import Tile from '../../components/Tile'
import Avatar from '../../components/Avatar'
import Panel from '../../components/Panel'
import Form from '../../components/Form'
import Button from '../../components/Button'

const times = (cb, i) => new Array(i).fill(null).map((_, i) => cb(i))

const Comment = ({ author, avatar, children }) => (
  <Tile>
    <Tile.Icon>
      <Avatar src={avatar} />
    </Tile.Icon>
    <Tile.Content>
      <Tile.Title class="text-bold">{author}</Tile.Title>
      <Tile.Subtitle>{children}</Tile.Subtitle>
    </Tile.Content>
  </Tile>
)

storiesOf('Recipes|Comments', module)
  .addDecorator(withColumn([12, 8, 6]))
  .addDecorator(Centered)
  .add('Default', () => (
    <Panel style={{ height: '75vh' }}>
      <Panel.Header class="h6">Comments</Panel.Header>
      <Panel.Body>
        {times(
          i => (
            <Comment
              author={faker.name.firstName()}
              avatar={faker.internet.avatar()}
            >
              <p>{faker.lorem.paragraph()}</p>
            </Comment>
          ),
          3
        )}
      </Panel.Body>
      <Panel.Footer>
        <div class="input-group">
          <Form.Input placeholder="Hello" />
          <Button class="input-group-btn" kind="primary">
            Send
          </Button>
        </div>
      </Panel.Footer>
    </Panel>
  ))
