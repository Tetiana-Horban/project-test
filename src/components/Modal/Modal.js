import React from "react";
import ReactDOM from "react-dom";
import { RiCloseFill } from "react-icons/ri";
import {
  ModalOverlay,
  ModalWrapper,
  ModalContainer,
  ModalContent,
} from "./modal.styled";
import { ButtonClose } from "./modalContent.styled";

const Modal = ({ isShowing, hide, children }) => {
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalOverlay />
          <ModalWrapper onClick={hide}>
            <ModalContainer>
              <ButtonClose
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <RiCloseFill size={23} />
              </ButtonClose>
              <ModalContent>{children}</ModalContent>
              <button>Start losing weight</button>
            </ModalContainer>
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;
