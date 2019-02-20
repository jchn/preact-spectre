import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Card from './'
import Button from '../Button'
import Grid from '../Grid'
import faker from 'faker'

storiesOf('Components|Card', module)
  .addDecorator(centered)
  .add('Default', () => (
    <Grid size="md">
      <Grid.Columns>
        <Grid.Col col={6} class="col-mx-auto">
          <Card>
            <Card.Image src={faker.image.nature()} alt="card image" />
            <Card.Header>
              <Card.Title class="h5">Card title</Card.Title>
              <Card.Subtitle class="text-gray">Card subtitle</Card.Subtitle>
            </Card.Header>
            <Card.Body>{faker.lorem.paragraph()}</Card.Body>
            <Card.Footer>
              <Button intent="primary">Save</Button>
            </Card.Footer>
          </Card>
        </Grid.Col>
      </Grid.Columns>
    </Grid>
  ))
