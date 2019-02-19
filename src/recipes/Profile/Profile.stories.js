import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'

import Panel from '../../components/Panel'
import Button from '../../components/Button'
import Grid from '../../components/Grid'
import Tabs from '../../components/Tabs'
import Avatar from '../../components/Avatar'
import Tile from '../../components/Tile'
import faker from 'faker'

storiesOf('Recipes|Profile', module).add('Default', () => (
  <Grid size="md">
    <Grid.Columns>
      <Grid.Col col={[12, 8, 6]} class="col-mx-auto">
        <Panel style={{ height: '75vh' }}>
          <Panel.Header class="text-center">
            <Avatar src={faker.internet.avatar()} size="lg" />
            <Panel.Title class="h6 mt-2">{faker.name.findName()}</Panel.Title>
            <Panel.Subtitle class="text-uppercase">
              {faker.name.jobTitle()}
            </Panel.Subtitle>
          </Panel.Header>
          <Panel.Nav>
            <Tabs block>
              <Tabs.Item active>
                <a href="#">Profile</a>
              </Tabs.Item>
              <Tabs.Item>
                <a href="#">Files</a>
              </Tabs.Item>
              <Tabs.Item>
                <a href="#">Tasks</a>
              </Tabs.Item>
            </Tabs>
          </Panel.Nav>
          <Panel.Body>
            <Tile centered class="my-2 py-2">
              <Tile.Content>
                <Tile.Title class="text-bold">E-mail</Tile.Title>
                <Tile.Subtitle>{faker.internet.email()}</Tile.Subtitle>
              </Tile.Content>
              <Tile.Action>
                <Button
                  link
                  size="lg"
                  class="action tooltip tooltip-left"
                  data-tooltip="Edit email"
                >
                  <i class="icon icon-edit" />
                </Button>
              </Tile.Action>
            </Tile>
            <Tile centered class="my-2 py-2">
              <Tile.Content>
                <Tile.Title class="text-bold">Skype</Tile.Title>
                <Tile.Subtitle>
                  {faker.name.firstName()}.{faker.name.lastName()}
                </Tile.Subtitle>
              </Tile.Content>
              <Tile.Action>
                <Button
                  link
                  size="lg"
                  class="action tooltip tooltip-left"
                  data-tooltip="Edit skype"
                >
                  <i class="icon icon-edit" />
                </Button>
              </Tile.Action>
            </Tile>
            <Tile centered class="my-2 py-2">
              <Tile.Content>
                <Tile.Title class="text-bold">Location</Tile.Title>
                <Tile.Subtitle>
                  {faker.address.city()}, {faker.address.state()}
                </Tile.Subtitle>
              </Tile.Content>
              <Tile.Action>
                <Button
                  link
                  size="lg"
                  class="action tooltip tooltip-left"
                  data-tooltip="Edit location"
                >
                  <i class="icon icon-edit" />
                </Button>
              </Tile.Action>
            </Tile>
          </Panel.Body>
          <Panel.Footer>
            <Button block intent="primary">
              Save
            </Button>
          </Panel.Footer>
        </Panel>
      </Grid.Col>
    </Grid.Columns>
  </Grid>
))
