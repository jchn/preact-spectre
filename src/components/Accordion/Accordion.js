import { h, cloneElement } from 'preact'
import PropTypes from 'prop-types'

const Accordion = ({ children, exclusive, arrow }) => (
  <div class="accordion">
    {children.map((element, i) =>
      cloneElement(element, { itemId: i, exclusive, arrow })
    )}
  </div>
)

Accordion.propTypes = {
  exlusive: PropTypes.bool,
  arrow: PropTypes.bool,
}

const AccordionItem = ({ children, title, itemId, exclusive, arrow, open }) => (
  <span>
    <input
      type={exclusive ? 'radio' : 'checkbox'}
      id={itemId}
      name="accordion-checkbox"
      hidden
      checked={open}
    />
    <label class="accordion-header" for={itemId}>
      {arrow && <i class="icon icon-arrow-right mr-1" />}
      {title}
    </label>
    <div class="accordion-body">{children}</div>
  </span>
)

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  exclusive: PropTypes.bool,
  arrow: PropTypes.bool,
  open: PropTypes.bool,
}

Accordion.Item = AccordionItem

export default Accordion
