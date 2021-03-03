import React from "react";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <div>
      {showModal && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content">
              <div className="box">
            Username or password is incorrect. Please try again. <br></br>If you're a new user, click the SignUp button at the top of the page.
            </div>
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
