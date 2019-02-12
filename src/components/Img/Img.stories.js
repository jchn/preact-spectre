import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Img from './'
import faker from 'faker'

storiesOf('Elements|Img', module)
  .addDecorator(centered)
  .add('Default', () => (
    <Img
      src={faker.image.nature(800, 600)}
      alt="nature"
      width="800"
      height="600"
    />
  ))
  .add('responsive', () => (
    <Img
      responsive
      src={faker.image.nature(800, 600)}
      alt="nature"
      width="800"
      height="600"
    />
  ))

storiesOf('Elements|Img/fit', module)
  .addDecorator(centered)
  .add('contain', () => (
    <Img
      responsive
      fit="contain"
      src={faker.image.nature(800, 600)}
      alt="nature"
      width="800"
      height="600"
      style={{ height: 500, width: 500 }}
    />
  ))
  .add('cover', () => (
    <Img
      responsive
      fit="cover"
      src={faker.image.nature(800, 600)}
      alt="nature"
      width="800"
      height="600"
      style={{ height: 500, width: 500 }}
    />
  ))
