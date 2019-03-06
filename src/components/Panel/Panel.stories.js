/** @jsx h */
import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/preact'
import Panel from './'
import Button from '../Button'

storiesOf('Components|Panel', module).add('Default', () => (
  <Panel>
    <Panel.Header>
      <Panel.Title class="h6">Comments</Panel.Title>
    </Panel.Header>
    <Panel.Nav>navigation</Panel.Nav>
    <Panel.Body>body</Panel.Body>
    <Panel.Footer>
      <Button primary block>
        Save
      </Button>
    </Panel.Footer>
  </Panel>
))
