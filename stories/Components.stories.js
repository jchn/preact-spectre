import { h } from 'preact'
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

storiesOf('Components', module)
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
