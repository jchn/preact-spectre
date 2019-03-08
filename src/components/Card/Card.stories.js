/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { withColumn } from '../../../.storybook/withWrapper'
import { storiesOf } from '@storybook/preact'
import Card from './'
import Button from '../Button'
import faker from 'faker'

storiesOf('Components|Card', module)
  .addDecorator(withColumn(6))
  .addDecorator(Centered)
  .add('Default', () => (
    <Card>
      <Card.Image src={faker.image.nature()} alt="card image" />
      <Card.Header>
        <Card.Title class="h5">Card title</Card.Title>
        <Card.Subtitle class="text-gray">Card subtitle</Card.Subtitle>
      </Card.Header>
      <Card.Body>{faker.lorem.paragraph()}</Card.Body>
      <Card.Footer>
        <Button kind="primary">Save</Button>
      </Card.Footer>
    </Card>
  ))
