import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import Box from '../src/Box'

storiesOf('Box', module).add('default', () => (
  <Box is="div" p={1} color="primary">
    a box component
  </Box>
))