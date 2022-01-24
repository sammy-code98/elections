import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import StudentAmbassador from "./RegistationForms/StudentAmbassadorForm";
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

export default function StudentRegister() {
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
    <div className="grid  grid-cols-1 md:grid-cols-2 mt-4 md:mx-auto items-center md:px-24">
      <div>
        <Image src="/student.svg" alt="Student Ambassador Image" width={500} height={400} />
      </div>
      <div className="mt-12">
        <p className="text-center text-lg font-light">Want to</p>
        <p className="text-center text-3xl">Become a Student Ambassador?</p>
        <div className="flex justify-center m-4">
          <button
            onClick={openModal}
            className="bg-green-600 text-white p-2 hover:bg-white hover:text-green-600 rounded-md shadow-md  cursor-pointer focus:outline-none"
          >
            Register Now
          </button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Ambassador form"
          >
            <span ref={(_subtitle) => (subtitle = _subtitle)}></span>
            <StudentAmbassador />
          </Modal>
        </div>
      </div>
    </div>
  );
}
