/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { withColumn } from '../../../.storybook/withWrapper'
import { storiesOf } from '@storybook/preact'
import Figure from './'
import Img from '../Img'
import faker from 'faker'

storiesOf('Elements|Figure', module)
  .addDecorator(withColumn([12, 8, 6]))
  .addDecorator(Centered)
  .add('Default', () => (
    <Figure>
      <Img
        responsive
        src={faker.image.nature(800, 600)}
        width="800"
        height="600"
        alt="Nature"
      />
      <Figure.Caption class="text-center">Nature</Figure.Caption>
    </Figure>
  ))
