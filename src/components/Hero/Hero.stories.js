/** @jsx h */
import { h } from 'preact'
import { storiesOf } from '@storybook/preact'
import Centered from '@storybook/addon-centered/preact'
import { withColumn } from '../../../.storybook/withWrapper'
import Hero from './'

storiesOf('Layout|Hero', module)
  .addDecorator(withColumn(12))
  .addDecorator(Centered)
  .add('Default', () => (
    <Hero class="bg-gray">
      <Hero.Body>
        <h1>Hero title</h1>
        <p>This is a hero example</p>
      </Hero.Body>
    </Hero>
  ))
