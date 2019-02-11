import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Pagination from './'

storiesOf('Components|Pagination', module)
  .addDecorator(centered)
  .add('Default', () => (
    <Pagination>
      <Pagination.Item disabled>
        <a href="#" tabindex="-1">
          Previous
        </a>
      </Pagination.Item>
      <Pagination.Item active>
        <a href="#">1</a>
      </Pagination.Item>
      <Pagination.Item>
        <a href="#">2</a>
      </Pagination.Item>
      <Pagination.Item>
        <a href="#">3</a>
      </Pagination.Item>
      <Pagination.Item>
        <span>&hellip;</span>
      </Pagination.Item>
      <Pagination.Item>
        <a href="#">12</a>
      </Pagination.Item>
      <Pagination.Item>
        <a href="#">Next</a>
      </Pagination.Item>
    </Pagination>
  ))

storiesOf('Components|Pagination', module).add('steps', () => (
  <Pagination>
    <Pagination.Item prev>
      <a href="#">
        <Pagination.Item.Subtitle>Previous</Pagination.Item.Subtitle>
        <Pagination.Item.Title class="h5">
          Getting started
        </Pagination.Item.Title>
      </a>
    </Pagination.Item>
    <Pagination.Item next>
      <a href="#">
        <Pagination.Item.Subtitle>Next</Pagination.Item.Subtitle>
        <Pagination.Item.Title class="h5">Layout</Pagination.Item.Title>
      </a>
    </Pagination.Item>
  </Pagination>
))
