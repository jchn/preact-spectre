/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { storiesOf } from '@storybook/preact'
import Nav from './'

storiesOf('Components|Nav', module)
  .addDecorator(Centered)
  .add('Default', () => (
    <Nav>
      <Nav.Item>
        <a href="#">Elements</a>
      </Nav.Item>
      <Nav.Item active>
        <a href="#">Layout</a>
        <Nav>
          <Nav.Item>
            <a href="#">Flexbox Grid</a>
          </Nav.Item>
          <Nav.Item>
            <a href="#">Responsive</a>
          </Nav.Item>
          <Nav.Item>
            <a href="#">Navbar</a>
          </Nav.Item>
          <Nav.Item>
            <a href="#">Empty states</a>
          </Nav.Item>
        </Nav>
      </Nav.Item>
      <Nav.Item>
        <a href="#">Components</a>
      </Nav.Item>
      <Nav.Item>
        <a href="#">Utilities</a>
      </Nav.Item>
    </Nav>
  ))
