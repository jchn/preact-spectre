import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import Table from '../src/Table'
import Button from '../src/Button'
import ButtonGroup from '../src/ButtonGroup'
import Form from '../src/Form'
import FormGroup from '../src/FormGroup'
import Code from '../src/Code'
import Label from '../src/Label'
import { Figure, Figcaption, Image } from '../src/Media'

storiesOf('Elements', module)
  .add('Tables', () => (
    <div>
      <h4>Tables</h4>
      <p>Tables include default styles for tables and data sets.</p>
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

      <h4>Striped tables</h4>

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

      <h4>Scrollable tables</h4>

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
    </div>
  ))
  .add('Buttons', () => (
    <div>
      <h4>Buttons</h4>
      <Button>default button</Button> <Button primary>primary button</Button>{' '}
      <Button link>link button</Button>
      <h4>Button colors</h4>
      <Button success>success button</Button>{' '}
      <Button error>error button</Button>
      <h4>Button sizes</h4>
      <Button large primary>
        large button
      </Button>
      <Button small primary>
        small button
      </Button>
      <h4>Button states</h4>
      <Button active>default active</Button>
      <Button primary active>
        primary active
      </Button>
      <Button link active>
        link active
      </Button>
      <br />
      <Button disabled>default disabled</Button>
      <Button primary disabled>
        primary disabled
      </Button>
      <Button link disabled>
        link disabled
      </Button>
      <br />
      <Button loading>default loading</Button>
      <Button primary loading>
        primary loading
      </Button>
      <Button link loading>
        link loading
      </Button>
      <h4>Button groups</h4>
      <ButtonGroup>
        <Button>first button</Button>
        <Button>second button</Button>
        <Button>third button</Button>
      </ButtonGroup>
      <ButtonGroup block>
        <Button active primary>
          first button
        </Button>
        <Button primary>second button</Button>
        <Button primary>third button</Button>
      </ButtonGroup>
    </div>
  ))
  .add('Forms', () => (
    <div>
      <FormGroup>
        <Form.Label for="input-name">Name</Form.Label>
        <Form.Input placeholder="Name" id="input-name" />
        <Form.Label for="input-email">Email</Form.Label>
        <Form.Input placeholder="Email" id="input-email" />
      </FormGroup>

      <h4>Form textarea</h4>

      <FormGroup>
        <Form.Label for="input-textarea">Message</Form.Label>
        <Form.Textarea placeholder="Textarea" rows="3" id="input-textarea" />
      </FormGroup>

      <h4>Form select</h4>

      <FormGroup>
        <Form.Select>
          <option>Choose an option</option>
          <option>Slack</option>
          <option>Skype</option>
          <option>Hipchat</option>
        </Form.Select>
      </FormGroup>

      <FormGroup>
        <Form.Select multiple>
          <option>Choose an option</option>
          <option>Slack</option>
          <option>Skype</option>
          <option>Hipchat</option>
        </Form.Select>
      </FormGroup>

      <h4>Form radio</h4>

      <FormGroup>
        <Form.Label>Gender</Form.Label>
        <Form.Radio name="gender" label="Male" />
        <Form.Radio name="gender" label="Female" />
      </FormGroup>

      <h4>Form switch</h4>

      <FormGroup>
        <Form.Switch label="Send me emails with news and tips" />
      </FormGroup>

      <h4>Form checkbox</h4>

      <FormGroup>
        <Form.Checkbox label="Remember me" />
        <Form.Checkbox label="Select all" indeterminate />
      </FormGroup>
    </div>
  ))
  .add('Code', () => <Code lang="JSX">some JSX</Code>)
  .add('Label', () => (
    <div>
      <h4>Labels</h4>
      <Label>default label</Label>
      <Label primary>primary label</Label>
      <Label secondary>secondary label</Label>
      <Label success>success label</Label>
      <Label warning>warning label</Label>
      <Label error>error label</Label>
      <h4>Rounded labels</h4>
      <Label rounded>default label</Label>
      <Label rounded primary>
        primary label
      </Label>
    </div>
  ))
  .add('Media', () => (
    <div>
      <h4>Images</h4>
      <Figure>
        <Image
          responsive
          src="http://lorempixel.com/output/nature-q-c-640-480-4.jpg"
          alt="Trees in autumn"
        />
        <Figcaption>Trees in autumn</Figcaption>
      </Figure>
    </div>
  ))
