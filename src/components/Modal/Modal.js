/** @jsx h */
import { h } from 'preact'
import PropTypes from 'prop-types'
import { createComponent } from '../../utils'

const modalClassModifiers = {
  open: 'active',
  size: size => `modal-${size}`,
}

const BackdropBase = createComponent('div', 'modal', modalClassModifiers)
const ModalContainer = createComponent('div', 'modal-container')

const Modal = ({ children, ...props }) => (
  <BackdropBase {...props}>
    <a href="#close" class="modal-overlay" aria-label="Close" />
    <ModalContainer>{children}</ModalContainer>
  </BackdropBase>
)

Modal.propTypes = {
  open: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
}

const ModalBodyBase = createComponent('div', 'modal-body')

const ModalBody = ({ children, ...props }) => (
  <ModalBodyBase {...props}>
    <div class="content">{children}</div>
  </ModalBodyBase>
)

const ModalTitle = createComponent('div', 'modal-title')
const ModalFooter = createComponent('div', 'modal-footer')
const ModalCloseButton = props => (
  <div class="btn btn-clear float-right" aria-label="Close" {...props} />
)

const ModalHeaderBase = createComponent('div', 'modal-header')
const ModalHeader = ({ children, onClickClose, ...props }) => (
  <ModalHeaderBase {...props}>
    {onClickClose && <ModalCloseButton onClick={onClickClose} />}
    {children}
  </ModalHeaderBase>
)

Modal.Header = ModalHeader
Modal.Title = ModalTitle
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
