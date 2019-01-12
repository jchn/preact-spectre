import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import { Table } from '../src/'

storiesOf('Table', module).add('default', () => (
  <Table striped>
    <thead>
      <tr>
        <th>name</th>
        <th>genre</th>
        <th>release date</th>
      </tr>
    </thead>
    <tbody>
      <tr class="active">
        <td>The Shawshank Redemption</td>
        <td>Crime, Drama</td>
        <td>14 October 1994</td>
      </tr>
    </tbody>
  </Table>
))
