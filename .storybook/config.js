import { addDecorator, configure } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'

addDecorator(
  withOptions({
    hierarchyRootSeparator: /\|/,
  })
)

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
