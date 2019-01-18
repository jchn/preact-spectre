import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Button from '../src/Button'
import Accordion from '../src/Accordion'
import Avatar from '../src/Avatar'
import Bar from '../src/Bar'
import Box from '../src/Box'
import faker from 'faker'
import Breadcrumb from '../src/Breadcrumb'
import Card from '../src/Card'
import Chip from '../src/Chip'
import Empty from '../src/Empty'
import Menu from '../src/Menu'
import Label from '../src/Label'
import Modal from '../src/Modal'
import Nav from '../src/Nav'
import Pagination from '../src/Pagination'
import Panel from '../src/Panel'
import Popover from '../src/Popover'
import Steps from '../src/Steps'
import Tabs from '../src/Tabs'
import Tile from '../src/Tile'
import Toast from '../src/Toast'

storiesOf('Components', module)
  .addDecorator(centered)
  .add('Accordion', () => (
    <div>
      <Accordion exclusive>
        <Accordion.Item title="Elements">Element 1</Accordion.Item>
        <Accordion.Item title="Layouts">Layout 1</Accordion.Item>
        <Accordion.Item title="Components">Component 1</Accordion.Item>
      </Accordion>
    </div>
  ))
  .add('Avatar', () => (
    <div>
      <Box mr="2">
        <Avatar
          xl
          initial="AB"
          alt="an avatar"
          src={faker.internet.avatar()}
          icon={faker.internet.avatar()}
        />
      </Box>
      <Box mr="2">
        <Avatar
          lg
          initial="AB"
          alt="an avatar"
          src={faker.internet.avatar()}
          presence="online"
        />
      </Box>
      <Box mr="2">
        <Avatar lm initial="AB" alt="an avatar" src={faker.internet.avatar()} />
      </Box>
      <Box mr="2">
        <Avatar sm initial="AB" alt="an avatar" />
      </Box>
    </div>
  ))
  .add('Bar', () => (
    <div>
      <Bar>
        <Bar.Item
          role="progressbar"
          progress={50}
          background="#818bd5"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          50%
        </Bar.Item>
        <Bar.Item
          role="progressbar"
          progress={25}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </Bar>
      <Bar slider>
        <Bar.Item
          role="progressbar"
          progress={25}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <Bar.SliderButton />
        </Bar.Item>
      </Bar>
    </div>
  ))
  .add('Breadcrumbs', () => (
    <Breadcrumb>
      <Breadcrumb.Item>
        <a href="#">Home</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Settings</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Change avatar</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add('Cards', () => (
    <Card>
      <Card.Image src={faker.image.nature()} alt="card image" />
      <Card.Header>
        <Card.Title>Card title</Card.Title>
        <Card.Subtitle>Card subtitle</Card.Subtitle>
      </Card.Header>
      <Card.Body>Card body</Card.Body>
      <Card.Footer>Card footer</Card.Footer>
    </Card>
  ))
  .add('Chips', () => (
    <div>
      <Chip>Crime</Chip>
      <Chip>Drama</Chip>
      <Chip>Biography</Chip>
      <Chip>Mystery</Chip>
    </div>
  ))
  .add('Empty states', () => (
    <Empty>
      <Empty.Icon>
        <i class="icon icon-3x icon-people" />
      </Empty.Icon>
      <Empty.Title>You have no new messages</Empty.Title>
      <Empty.Subtitle>Click the button to start a conversation.</Empty.Subtitle>
      <Empty.Action>
        <Button primary>Send a message</Button>
      </Empty.Action>
    </Empty>
  ))
  .add('Menu', () => (
    <Menu>
      <Menu.Divider title="Links" />
      <Menu.Item>
        <a href="#">
          <i class="icon icon-link" /> Slack
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="#">Hipchat</a>
        <Menu.Badge>
          <Label primary>2</Label>
        </Menu.Badge>
      </Menu.Item>
      <Menu.Item>
        <a href="#">Skype</a>
      </Menu.Item>
    </Menu>
  ))
  .add('Modals', () => (
    <Modal open>
      <Modal.Header>
        <Modal.Title class="h4">Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>This is the content inside the modal.</p>
        <h4>Lorem ipsum</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          risus leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis
          quis sodales risus. Etiam euismod ornare consequat.
        </p>
        <p>
          Climb leg rub face on everything give attitude nap all day for under
          the bed. Chase mice attack feet but rub face on everything hopped up
          on goofballs.
        </p>
        <h4>Cupcake ipsum</h4>
        <p>
          Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear
          claw topping. Chupa chups apple pie carrot cake chocolate cake
          caramels.
        </p>
        <p>
          De braaaiiiins apocalypsi gorger omero prefrontal cortex undead
          survivor fornix dictum mauris. Hi brains mindless mortuis limbic
          cortex soulless creaturas optic nerve.
        </p>
        <h4>Candy ipsum</h4>
        <p>
          Efficiently unleash cross-media information without cross-media value.
          Quickly maximize timely deliverables for real-time schemas.
          Dramatically maintain clicks-and-mortar.
        </p>
        <p>
          Caerphilly swiss fromage frais. Brie cheese and wine fromage frais
          chalk and cheese danish fontina smelly cheese who moved my cheese cow.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button primary>Share</Button>
        <Button link>Close</Button>
      </Modal.Footer>
    </Modal>
  ))
  .add('Nav', () => (
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
  .add('Pagination', () => (
    <div>
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
    </div>
  ))
  .add('Panels', () => (
    <Panel>
      <Panel.Header>
        <Panel.Header.Title class="h6">Comments</Panel.Header.Title>
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
  .add('Popovers', () => (
    <div>
      <Popover top target={<Button primary>top popover</Button>}>
        <Card>
          <Card.Header>card header</Card.Header>
          <Card.Body>card body</Card.Body>
          <Card.Footer>card footer</Card.Footer>
        </Card>
      </Popover>
      <Popover right target={<Button primary>right popover</Button>}>
        <Card>
          <Card.Header>card header</Card.Header>
          <Card.Body>card body</Card.Body>
          <Card.Footer>card footer</Card.Footer>
        </Card>
      </Popover>
      <Popover bottom target={<Button primary>bottom popover</Button>}>
        <Card>
          <Card.Header>card header</Card.Header>
          <Card.Body>card body</Card.Body>
          <Card.Footer>card footer</Card.Footer>
        </Card>
      </Popover>
      <Popover left target={<Button primary>left popover</Button>}>
        <Card>
          <Card.Header>card header</Card.Header>
          <Card.Body>card body</Card.Body>
          <Card.Footer>card footer</Card.Footer>
        </Card>
      </Popover>
    </div>
  ))
  .add('Steps', () => (
    <Steps>
      <Steps.Item>
        <a href="#">Step 1</a>
      </Steps.Item>
      <Steps.Item>
        <a href="#">Step 2</a>
      </Steps.Item>
      <Steps.Item active>
        <a href="#">Step 3</a>
      </Steps.Item>
      <Steps.Item>
        <a href="#">Step 4</a>
      </Steps.Item>
    </Steps>
  ))
  .add('Tabs', () => (
    <Tabs>
      <Tabs.Item active>
        <a href="#">Music</a>
      </Tabs.Item>
      <Tabs.Item>
        <a href="#">Playlist</a>
      </Tabs.Item>
      <Tabs.Item>
        <a href="#">Radio</a>
      </Tabs.Item>
      <Tabs.Item action>
        <a href="#">action</a>
      </Tabs.Item>
    </Tabs>
  ))
  .add('Tiles', () => (
    <Tile centered>
      <Tile.Icon>
        <Avatar lg src={faker.internet.avatar()} />
      </Tile.Icon>
      <Tile.Content>
        <Tile.Content.Title>The Avengers</Tile.Content.Title>
        <Tile.Content.Subtitle>
          Earth's Mightiest Heroes joined forces to take on threats that were
          too big for any one hero to tackle...
        </Tile.Content.Subtitle>
      </Tile.Content>
      <Tile.Action>
        <Button primary>Join</Button>
      </Tile.Action>
    </Tile>
  ))
  .add('Toasts', () => (
    <div>
      <Toast>
        Toast <Button clear class="float-right" />
      </Toast>
      <Toast primary>
        Toast primary <Button clear class="float-right" />
      </Toast>
      <Toast success>
        Toast success <Button clear class="float-right" />
      </Toast>
      <Toast warning>
        Toast warning <Button clear class="float-right" />
      </Toast>
      <Toast error>
        Toast error <Button clear class="float-right" />
      </Toast>
    </div>
  ))
