import { h, cloneElement } from 'preact'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const AccordionBase = createComponent('accordion', {})

const Accordion = ({ children, exclusive, arrow, ...props }) => (
  <AccordionBase class="accordion" {...props}>
    {children.map((element, i) =>
      cloneElement(element, { itemId: i, exclusive, arrow })
    )}
  </AccordionBase>
)

Accordion.propTypes = {
  exlusive: PropTypes.bool,
  arrow: PropTypes.bool,
}

Accordion.defaultProps = {
  is: 'div',
}

const AccordionItemBase = createComponent('accordion-item', {})

const AccordionItem = ({
  children,
  title,
  itemId,
  exclusive,
  arrow,
  open,
  ...props
}) => (
  <AccordionItemBase {...props}>
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
  </AccordionItemBase>
)

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  exclusive: PropTypes.bool,
  arrow: PropTypes.bool,
  open: PropTypes.bool,
}

AccordionItem.defaultProps = {
  is: 'span',
}

Accordion.Item = AccordionItem

export default Accordion
