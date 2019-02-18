import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/react'
import Modal from './'
import Button from '../Button'

storiesOf('Components|Modal', module).add('Default', () => (
  <Modal open>
    <Modal.Header>
      <Modal.Title class="h4">Modal title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>This is the content inside the modal.</p>
      <h4>Lorem ipsum</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus
        leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis quis
        sodales risus. Etiam euismod ornare consequat.
      </p>
      <p>
        Climb leg rub face on everything give attitude nap all day for under the
        bed. Chase mice attack feet but rub face on everything hopped up on
        goofballs.
      </p>
      <h4>Cupcake ipsum</h4>
      <p>
        Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear
        claw topping. Chupa chups apple pie carrot cake chocolate cake caramels.
      </p>
      <p>
        De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor
        fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless
        creaturas optic nerve.
      </p>
      <h4>Candy ipsum</h4>
      <p>
        Efficiently unleash cross-media information without cross-media value.
        Quickly maximize timely deliverables for real-time schemas. Dramatically
        maintain clicks-and-mortar.
      </p>
      <p>
        Caerphilly swiss fromage frais. Brie cheese and wine fromage frais chalk
        and cheese danish fontina smelly cheese who moved my cheese cow.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button primary>Share</Button>
      <Button link>Close</Button>
    </Modal.Footer>
  </Modal>
))

storiesOf('Components|Modal/size', module)
  .add('sm', () => (
    <Modal size="sm" open>
      <Modal.Header>
        <Modal.Title class="h5">Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
  .add('md', () => (
    <Modal size="md" open>
      <Modal.Header>
        <Modal.Title class="h4">Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
  .add('lg', () => (
    <Modal size="lg" open>
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
