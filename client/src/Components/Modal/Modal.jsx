import React from "react";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <div>
      {showModal && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content">
            Username or password is incorrect. Please try again.
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => {
              setShowModal(false);
            }}
          ></button>
        </div>
      )}
    </div>
  );
};

export default Modal;
