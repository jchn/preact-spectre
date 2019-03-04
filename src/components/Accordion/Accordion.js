// import { h, cloneElement } from 'preact'
import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const AccordionBase = createComponent('div', 'accordion', {})

const Accordion = ({ children, exclusive, arrow, uid, ...props }) => (
  <AccordionBase {...props}>
    {children.map((element, i) =>
      cloneElement(element, {
        exclusive,
        arrow,
        uid: `${uid}-${i}`,
        key: `${uid}-${i}`,
      })
    )}
  </AccordionBase>
)

Accordion.propTypes = {
  exclusive: PropTypes.bool,
  arrow: PropTypes.bool,
  /** to give each accordion item a unique identifier if there are multiple accordions */
  uid: PropTypes.string.isRequired,
}

Accordion.defaultProps = {
  is: 'div',
  exclusive: false,
}

const AccordionItemBase = createComponent('div', 'accordion-item', {})

const AccordionItem = ({
  children,
  title,
  exclusive,
  arrow,
  open,
  uid,
  ...props
}) => (
  <AccordionItemBase {...props}>
    <input
      type={exclusive ? 'radio' : 'checkbox'}
      id={uid}
      name="accordion-checkbox"
      hidden
      checked={open}
    />
    <label class="accordion-header" htmlFor={uid}>
      {arrow && <i class="icon icon-arrow-right mr-1" />}
      {title}
    </label>
    <div class="accordion-body">{children}</div>
  </AccordionItemBase>
)

AccordionItem.propTypes = {
  uid: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  exclusive: PropTypes.bool,
  arrow: PropTypes.bool,
  open: PropTypes.bool,
}

AccordionItem.defaultProps = {
  is: 'span',
}

Accordion.Item = AccordionItem

export default Accordion
