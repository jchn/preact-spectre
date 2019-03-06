/** @jsx h */
import { h } from 'preact'
import { storiesOf } from '@storybook/preact'
import Navbar from './'

storiesOf('Layout|Navbar', module)
  .add('Default', () => (
    <Navbar>
      <Navbar.Section>
        <a href="#" class="navbar-brand text-bold mr-2">
          Spectre.css
        </a>
        <a href="#" class="btn btn-link">
          Docs
        </a>
        <a href="#" class="btn btn-link">
          GitHub
        </a>
      </Navbar.Section>
      <Navbar.Section>
        <div class="input-group input-inline">
          <input class="form-input" type="text" placeholder="search" />
          <button class="btn btn-primary input-group-btn">Search</button>
        </div>
      </Navbar.Section>
    </Navbar>
  ))
  .add('with centered section', () => (
    <Navbar>
      <Navbar.Section>
        <a href="#" class="btn btn-link">
          Docs
        </a>
        <a href="#" class="btn btn-link">
          Examples
        </a>
      </Navbar.Section>
      <Navbar.Center>logo</Navbar.Center>
      <Navbar.Section>
        <a href="#" class="btn btn-link">
          Twitter
        </a>
        <a href="#" class="btn btn-link">
          GitHub
        </a>
      </Navbar.Section>
    </Navbar>
  ))
