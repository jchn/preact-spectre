/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { withColumn } from '../../../.storybook/withWrapper'
import { storiesOf } from '@storybook/preact'
import Table from './'

storiesOf('Elements|Table', module)
  .addDecorator(withColumn([12, 12, 8, 8, 6]))
  .addDecorator(Centered)
  .add('Default', () => (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Release date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
        </tr>
        <tr>
          <td>The Godfather</td>
          <td>Crime, Drama</td>
          <td>24 March 1972</td>
        </tr>
        <tr>
          <td>Schindler's List</td>
          <td>Biography, Drama, History</td>
          <td>4 February 1994</td>
        </tr>
        <tr>
          <td>Se7en</td>
          <td>Crime, Drama, Mystery</td>
          <td>22 September 1995</td>
        </tr>
      </tbody>
    </Table>
  ))
  .add('striped', () => (
    <Table striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Release date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
        </tr>
        <tr>
          <td>The Godfather</td>
          <td>Crime, Drama</td>
          <td>24 March 1972</td>
        </tr>
        <tr>
          <td>Schindler's List</td>
          <td>Biography, Drama, History</td>
          <td>4 February 1994</td>
        </tr>
        <tr>
          <td>Se7en</td>
          <td>Crime, Drama, Mystery</td>
          <td>22 September 1995</td>
        </tr>
      </tbody>
    </Table>
  ))
  .add('hover', () => (
    <Table hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Release date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
        </tr>
        <tr>
          <td>The Godfather</td>
          <td>Crime, Drama</td>
          <td>24 March 1972</td>
        </tr>
        <tr>
          <td>Schindler's List</td>
          <td>Biography, Drama, History</td>
          <td>4 February 1994</td>
        </tr>
        <tr>
          <td>Se7en</td>
          <td>Crime, Drama, Mystery</td>
          <td>22 September 1995</td>
        </tr>
      </tbody>
    </Table>
  ))
  .add('scroll', () => (
    <Table scroll>
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Release date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
        </tr>
        <tr>
          <td>The Godfather</td>
          <td>Crime, Drama</td>
          <td>24 March 1972</td>
        </tr>
        <tr>
          <td>Schindler's List</td>
          <td>Biography, Drama, History</td>
          <td>4 February 1994</td>
        </tr>
        <tr>
          <td>Se7en</td>
          <td>Crime, Drama, Mystery</td>
          <td>22 September 1995</td>
        </tr>
      </tbody>
    </Table>
  ))
