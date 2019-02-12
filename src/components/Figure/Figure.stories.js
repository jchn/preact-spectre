import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Figure from './'
import Img from '../Img'
import faker from 'faker'

storiesOf('Elements|Figure', module)
  .addDecorator(centered)
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
