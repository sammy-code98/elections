import React, { useState } from "react";
import Ambassador from "./Ambassador";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default function Register() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container mx-6 mt-24 md:mx-auto">
      <div className="md:grid md:grid-cols-2 justify-items-center px-10">
        <div>
          <p className="text-center text-lg font-light">Register to</p>
          <p className="text-center text-3xl">Become an Ambassador</p>
          <div className="flex justify-center m-4">
            <button
              onClick={openModal}
              className="bg-sky-500 text-white p-2 rounded-md shadow-md  cursor-pointer focus:outline-none"
            >
              Register Now
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Ambassord form"
            >
              <span ref={(_subtitle) => (subtitle = _subtitle)}></span>
              <Ambassador />
            </Modal>
          </div>
        </div>
        <div>
          <p className="text-center text-lg font-light">Want to</p>
          <p className="text-center text-3xl">Become a student Ambassador?</p>
          <div className="flex justify-center m-4">
            <button className="bg-sky-500 text-white p-2 rounded-md shadow-md  cursor-pointer focus:outline-none">
              Register Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
