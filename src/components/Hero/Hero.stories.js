import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import Hero from './'

storiesOf('Layout|Hero', module).add('Default', () => (
  <Hero class="bg-gray">
    <Hero.Body>
      <h1>Hero title</h1>
      <p>This is a hero example</p>
    </Hero.Body>
  </Hero>
))
