/** @jsx h */

import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/preact'
import Accordion from './'

storiesOf('Components|Accordion', module)
  .add('Default', () => (
    <Accordion>
      <Accordion.Item title="Elements">Element 1</Accordion.Item>
      <Accordion.Item title="Layouts">Layout 1</Accordion.Item>
      <Accordion.Item title="Components">Component 1</Accordion.Item>
    </Accordion>
  ))
  .add('exclusive', () => (
    <Accordion exclusive>
      <Accordion.Item title="Elements">Element 1</Accordion.Item>
      <Accordion.Item title="Layouts">Layout 1</Accordion.Item>
      <Accordion.Item title="Components">Component 1</Accordion.Item>
    </Accordion>
  ))
  .add('arrow', () => (
    <Accordion arrow>
      <Accordion.Item title="Elements">Element 1</Accordion.Item>
      <Accordion.Item title="Layouts">Layout 1</Accordion.Item>
      <Accordion.Item title="Components">Component 1</Accordion.Item>
    </Accordion>
  ))
